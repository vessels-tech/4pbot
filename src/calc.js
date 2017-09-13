import moment from 'moment'

import { ReportType } from './enums'

/**
 * Given two dates, find the number of days from the first moment to the second
 */
export const findDaysDifference = (firstMoment, secondMoment) => {
  const duration = moment.duration(secondMoment.diff(firstMoment));
  return duration.asDays();
}

/**
 * given a list of reports, get the total weight of the reports
 */
export const getTotalWeight = (reports) => {
  return reports.reduce((acc, curr) => {
    return acc + curr.weight;
  }, 0);
}

export const getWeightedAverage = (reports, totalWeight) => {
  return reports.reduce((acc, curr) => {
    return acc + curr.delay * curr.weight / totalWeight;
  }, 0);
}

/**
 * Given a payment, find the average difference between the expected and actual payment dates
 * This is a naive approach, and we can come up with much better ones later
 */
export const delayForPayment = (payment) => {
  //Find weighted average of all actual reports
  const delayReports = payment.dateReports
    .filter(report => report.type === ReportType.Actual)
    .map(report => {
      return {
        delay: findDaysDifference(moment(payment.expectedDate), moment(report.date)),
        weight: report.weight
      }
    });

  const totalWeight = getTotalWeight(delayReports);
  return getWeightedAverage(delayReports, totalWeight);
}
