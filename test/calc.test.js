import moment from 'moment'

import { getPaymentFactors, getPaymentEstimate, findDaysDifference, getTotalWeight, getWeightedAverage } from '../src/calc.js'


describe('getPaymentFactors', () => {
  it('should always equal the maxChildren if the total children is equal or above maxChildren', () => {
    const { x, y } = getPaymentFactors(3, 3);
    expect(x + y).toBe(3);
  });

  it('should always equal the maxChildren if the total children is equal or above maxChildren', () => {
    const { x, y } = getPaymentFactors(1, 2);
    expect(x + y).toBe(3);
  });

  it('should favour older children over younger children', () => {
    const { x, y } = getPaymentFactors(3, 3);
    expect(x).toBe(0);
    expect(y).toBe(3);
  });

  it('should favour older children over younger children', () => {
    const { x, y } = getPaymentFactors(1, 3);
    expect(x).toBe(0);
    expect(y).toBe(3);
  });

  it('should be less than maxChildren if the total is less than maxChildren', () => {
    const { x, y } = getPaymentFactors(0, 2);
    expect(x + y).toBe(2);
  });
});

describe('getPaymentEstimate', () => {
  it('returns the correct estimate', () => {
    expect(getPaymentEstimate(2, 1)).toBe(500 + 2 * 300 + 1 * 500);
  })
})

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
