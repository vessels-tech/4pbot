import { Router } from 'express';
import { request } from 'graphql-request';

import { getError } from './utils';
import { allPastPaymentsQuery } from './queries';

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
    .then(data => console.log(data))
    .then(() => res.send("HELLO"))
    .catch(err => res.send(err))

});



export default routes;
