'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayForPayment = exports.findDaysDifference = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _enums = require('./enums');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given two dates, find the number of days from the first moment to the second
 */

const findDaysDifference = exports.findDaysDifference = (firstMoment, secondMoment) => {
  const duration = _moment2.default.duration(secondMoment.diff(firstMoment));
  console.log(duration.asDays());
};

/**
 * Given a payment, find the average difference between the expected and actual payment dates
 */
const delayForPayment = exports.delayForPayment = payment => {
  //Find weighted average of all actual reports

  payment.dateReports.filter(report => report.type === _enums.ReportType.Actual).map(report => findDaysDifference((0, _moment2.default)(payment.expectedDate), (0, _moment2.default)(report))).reduce((acc, curr) => {}, 0);
};
//# sourceMappingURL=calc.js.map