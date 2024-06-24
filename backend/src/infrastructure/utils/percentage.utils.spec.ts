import {
  transformToPercentage,
  generatePercentagesToMaxAndMin,
} from './percentage.utils';

describe('Percentage Utils', () => {
  describe('transformToPercentage', () => {
    it('should correctly transform a string number to percentage', () => {
      // Given
      const input = '0.5';
      const expectedOutput = '50.00';

      // When
      const result = transformToPercentage(input);

      // Then
      expect(result).toEqual(expectedOutput);
    });

    it('should correctly transform a number to percentage', () => {
      // Given
      const input = 0.5;
      const expectedOutput = '50.00';

      // When
      const result = transformToPercentage(input);

      // Then
      expect(result).toEqual(expectedOutput);
    });
  });

  describe('generatePercentagesToMaxAndMin', () => {
    it('should generate a min and max percentage object', () => {
      // When
      const result = generatePercentagesToMaxAndMin();

      // Then
      expect(result).toHaveProperty('minPercentage');
      expect(result).toHaveProperty('maxPercentage');
      expect(result.minPercentage).toBeLessThanOrEqual(result.maxPercentage);
    });
  });
});
