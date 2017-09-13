import moment from 'moment'

import { ReportType } from './enums'

/**
 * Given two dates, find the number of days from the first date to the second
 */

export const findDaysDifference(firstDate, secondDate) {

}

/**
 * Given a payment, find the average difference between the expected and actual payment dates
 */
export const delayForPayment = (payment) => {
  //Find weighted average of all actual reports

  payment.dateReports
    .filter(report => report.type === ReportType.Actual)
    .map(report => findDaysDifference(payment.expectedDate, report))
    .reduce((acc, curr) => {

    }, 0)
}
