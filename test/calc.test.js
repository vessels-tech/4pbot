import moment from 'moment'

import { findDaysDifference, getTotalWeight, getWeightedAverage } from '../src/calc.js'


describe('findDaysDifference', () => {
  it('should find the difference between 2 moments', () => {
    const moment1 = moment('2017-01-01T00:00:00.000Z');
    const moment2 = moment('2017-01-10T00:00:00.000Z');

    findDaysDifference(moment1, moment2);
    expect(findDaysDifference(moment1, moment2)).toBe(9);
  });

  it('should be negative for negative dates', () => {
    const moment1 = moment('2017-01-10T00:00:00.000Z');
    const moment2 = moment('2017-01-01T00:00:00.000Z');

    findDaysDifference(moment1, moment2);
    expect(findDaysDifference(moment1, moment2)).toBe(-9);
  });
});


describe('getTotalWeight', () => {
  it('gets the total weight for a list of reports', () => {
    const delayReports = [
      {delay: 1, weight:1},
      {delay: 1, weight:0.5},
      {delay: 1, weight:0.75},
    ];

    expect(getTotalWeight(delayReports)).toBe(2.25);
  });
});

describe('getWeightedAverage', () => {
  it('gets the weighted average for a list of reports', () => {
    const delayReports = [
      {delay: 1, weight:1},
      {delay: 7, weight:0.5},
      {delay: -1, weight:0.75},
    ];

    const expected = 1/2.25 + 7 * 0.5/2.25 - 1 * 0.75/2.25;
    expect(getWeightedAverage(delayReports, 2.25)).toBe(expected);
  });
});
