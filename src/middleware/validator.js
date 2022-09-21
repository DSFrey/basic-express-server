'use strict';

const errorHandler = require('../error-handlers/500');

const validator = (req, res, next) => {
  if(typeof req.query.name === 'undefined') {
    errorHandler('No query', req, res);
  } else next();
};

module.exports = validator;
