import moment from 'moment'

import { ReportType } from './enums'


export const getPaymentFactors = (elementarySchoolChildren, highSchoolChildren) => {
  const maxChildren = 3;
  let x = 0;
  let y = 0;

  if (highSchoolChildren >= maxChildren) {
    return {
      x: 0,
      y: maxChildren
    };
  }

  if (elementarySchoolChildren + highSchoolChildren > maxChildren) {
    return {
      x: maxChildren - highSchoolChildren,
      y: highSchoolChildren
    };
  }

  return {
    x: elementarySchoolChildren,
    y: highSchoolChildren
  };
}

export const getPaymentEstimate = (x, y) => {

  //ref: http://pantawid.dswd.gov.ph/images/stories/pantawidfaq.pdf
  return 500 + x * 300 + y * 500;

  //TODO: add maximum calculations
  //TODO: what happens if a child misses school? Does this count towards the total?
}

/**
 * Given a current household situation, return an array of strings of the conditions they must meet
 * ref: http://www.officialgazette.gov.ph/programs/conditional-cash-transfer/
 */
export const getConditionsList = (pregnant, youngChildren, elementarySchoolChildren, highSchoolChildren) => {
  const conditionsList = [];

  //Conditions for everyone:
  conditionsList.push('You must attend the family development sessions, which include topics on responsible parenting, health, and nutrition.');

  if (pregnant) {
    conditionsList.push('Pregnant women must avail pre- and post-natal care, and be attended during childbirth by a trained professional.');
  }

  if (youngChildren > 0) {
    conditionsList.push('Children aged 0-5 must receive regular preventive health check-ups and vaccines.');
    conditionsList.push('Children aged 6-14 must receive deworming pills twice a year.');
  }

  if (elementarySchoolChildren + highSchoolChildren > 0) {
    //This doesn't line up 100% with the question we are asking, but that's ok.
    conditionsList.push('Children-beneficiaries aged 3-18 must enroll in school, and maintain an attendance of at least 85% of class days every month.');
  }

  return conditionsList;
}


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
