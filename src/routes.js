import { Router } from 'express';
import { request } from 'graphql-request';

import { getError } from './utils';
import { allPastPaymentsQuery } from './queries';
import { delayForPayment } from './calc';

const routes = Router();
const GQ_URL = process.env.GQ_URL;

/**
 * GET home page
 */
routes.get('/', (req, res) => {
  res.render('index', { title: 'Express Babel' });
});


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
