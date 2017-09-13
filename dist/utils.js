"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


const getError = (statusCode, message) => {
  let error = new Error(message);
  error.statusCode = statusCode;

  return error;
};

exports.default = {
  getError: getError
};
//# sourceMappingURL=utils.js.map