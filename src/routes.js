import { Router } from 'express';
import { request } from 'graphql-request';

import { getError } from './utils';
import { allPastPaymentsQuery } from './queries';
import { delayForPayment } from './calc';

const routes = Router();
const GQ_URL = "https://api.graph.cool/simple/v1/cj7ib6uk61d770127l9de4o2a";

/**
 * GET home page
 */
routes.get('/', (req, res) => {
  res.render('index', { title: 'Express Babel' });
});


routes.get('/:postcode/nextDate', (req, res) => {
  const { postcode } = req.params;

  if (!postcode || postcode === '') {
    res.status(400);
    res.send('postcode is a required query parameter');
  }

  //Talk to graphcool, do some maths
  const query = allPastPaymentsQuery(postcode, new Date());
  request(GQ_URL, query.query, query.variables)
    .then(data => {
      const averageDelay = delayForPayment(data.allPayments);
      res.send('HEY');
      // res.send(`The current average delay for postcode ${postcode} is ${averageDelay} days.The next expected payment date is: ...`);
    })
    .catch(err => res.send(err))

});



export default routes;
