'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _utils = require('./utils');

const routes = (0, _express.Router)();

/**
 * GET home page
 */
routes.get('/', (req, res) => {
  res.render('index', { title: 'Express Babel' });
});

routes.get('/list', (req, res, next) => {
  const { title } = req.query;

  if (title == null || title === '') {
    // You probably want to set the response HTTP status to 400 Bad Request
    // or 422 Unprocessable Entity instead of the default 500 of
    // the global error handler (e.g check out https://github.com/kbariotis/throw.js).
    // This is just for demo purposes.
    next(new Error('The "title" parameter is required'));
    return;
  }

  res.render('index', { title });
});

routes.get('/nextDate', (req, res, next) => {
  const { postcode } = req.query;

  if (!postcode || postcode === '') {
    next((0, _utils.getError)(400, 'postcode is required'));
  }

  return "HELLO";
});

exports.default = routes;
//# sourceMappingURL=routes.js.map