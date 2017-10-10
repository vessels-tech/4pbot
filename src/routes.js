import { Router } from 'express';
import { request } from 'graphql-request';

import { getError, isNullOrUndefined } from './utils';
import { allPastPaymentsQuery } from './queries';
import {
  delayForPayment,
  getPaymentFactors,
  getPaymentEstimate,
  getConditionsList
} from './calc';

const routes = Router();
const GQ_URL = process.env.GQ_URL;

/**
 * GET home page
 */
routes.get('/', (req, res) => {
  res.render('index', { title: 'Express Babel' });
});

const childrenParser = (childrenText) => {
  if (childrenText.indexOf('+') > -1) {
    return 3; //3 is max for now.
  }

  return parseInt(childrenText);
}

const paymentParser = (query) => {
  return new Promise((resolve, reject) => {
    const {
      elementary_school_children,
      expecting_baby,
      high_school_children,
      young_children,
    } = query;

    let pregnant = false;
    if (expecting_baby.toLowerCase() === "yes"
        || expecting_baby === '1'
        || expecting_baby.toLowerCase() === 'true'
      ) {
      pregnant = true;
    }

    let youngChildren;
    let elementarySchoolChildren;
    let highSchoolChildren;

    try {
      youngChildren = childrenParser(young_children);
      elementarySchoolChildren = childrenParser(elementary_school_children);
      highSchoolChildren = childrenParser(high_school_children);
    } catch (err) {
      return reject(err);
    }

    return resolve({
      pregnant,
      youngChildren,
      elementarySchoolChildren,
      highSchoolChildren,
    });
  });
}

routes.get('/payment', (req, res) => {
  paymentParser(req.query)
    .then(({
      pregnant,
      youngChildren,
      elementarySchoolChildren,
      highSchoolChildren
    }) => {
      if (isNullOrUndefined(pregnant)||
          isNullOrUndefined(youngChildren) ||
          isNullOrUndefined(elementarySchoolChildren) ||
          isNullOrUndefined(highSchoolChildren)
      ) {
        res.status(400);
        return res.send('Error. Could not understand query.');
      }

      const { x, y } = getPaymentFactors(elementarySchoolChildren, highSchoolChildren);
      const paymentEstimate = getPaymentEstimate(x, y);
      const conditionsList = getConditionsList(pregnant, youngChildren, elementarySchoolChildren, highSchoolChildren)
        .reduce((acc, curr) => acc + '\n' + curr, '');

      const responseString = `We estimate your payment to be: ${paymentEstimate}p a month, up to ___ a year.${conditionsList}\n`;

      res.send(responseString);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.send('Error: ', err);
    });
  });


/**
 * submit a structured past reading, with information such as date, location, 
 */
routes.post('/past_date', (req, res) => {

})

/**
 * Allow a user to query the next date for a payment, based on past dates
 */
routes.get('/next_date', (req, res) => {
  const { zip } = req.query;
  let { postcode } = req.query;

  //chatfuel sends a zip, not postcode
  if (!postcode){
    postcode = zip;
  }

  if (!postcode || postcode === '') {
    res.status(400);
    res.send('postcode/zip is a required query parameter');
  }

  //Talk to graphcool, do some maths
  const query = allPastPaymentsQuery(postcode, new Date());
  request(GQ_URL, query.query, query.variables)
    .then(data => {
      if (data.allPayments.length === 0) {
        return res.send(`Sorry. We couldn't find past payments for this postcode.\n`);
      }

      const averageDelay = data.allPayments.reduce((acc, curr) => {
        const paymentDelay = delayForPayment(curr);
        return acc + paymentDelay;
      }, 0) / data.allPayments.length;

      //TODO: also get the last payment date

      return res.send(`The current average delay for postcode ${postcode} is around ${averageDelay.toFixed(2)} days.\nThe next expected payment date is: ...\n`);
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    });
});



export default routes;
