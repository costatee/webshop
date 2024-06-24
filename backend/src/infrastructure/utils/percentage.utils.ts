import { faker } from '@faker-js/faker';

export function transformToPercentage(value: string | number): string {
  return (+value * 100).toFixed(2);
}

export const transformToPercentageNumber = (value: string | number): number => {
  return +value / 100;
};

export const generatePercentagesToMaxAndMin = (): {
  minPercentage: number;
  maxPercentage: number;
} => {
  let minPercentage: number = faker.datatype.number({ min: 0, max: 100 }) / 100;
  let maxPercentage: number = faker.datatype.number({ min: 0, max: 100 }) / 100;

  if (minPercentage > maxPercentage) {
    [minPercentage, maxPercentage] = [maxPercentage, minPercentage];
  }

  return { minPercentage, maxPercentage };
};
