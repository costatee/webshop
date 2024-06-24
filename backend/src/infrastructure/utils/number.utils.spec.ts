// import { Decimal } from '../../prisma/generated/client/runtime';
// import { formatterThousand, formatDecimalPercentage } from './number.utils';

// describe('formatterThousand', () => {
//   test('should format string number correctly', () => {
//     // Given
//     const input = '1234567';
//     const expectedOutput = '1,234,567';

//     // When
//     const result = formatterThousand(input);

//     // Then
//     expect(result).toEqual(expectedOutput);
//   });

//   test('should format number correctly', () => {
//     // Given
//     const input = 1234567;
//     const expectedOutput = '1,234,567';

//     // When
//     const result = formatterThousand(input);

//     // Then
//     expect(result).toEqual(expectedOutput);
//   });

//   test('should return empty string for empty string input', () => {
//     // Given
//     const input = '';
//     const expectedOutput = '';

//     // When
//     const result = formatterThousand(input);

//     // Then
//     expect(result).toEqual(expectedOutput);
//   });

//   test('should return empty string for non-numeric string input', () => {
//     // Given
//     const input = 'abc';
//     const expectedOutput = '';

//     // When
//     const result = formatterThousand(input);

//     // Then
//     expect(result).toEqual(expectedOutput);
//   });
// });

// describe('#formatDecimalPercentage', () => {
//   test.each([
//     [new Decimal(0.999), '100'],
//     [new Decimal(0.42), '42'],
//     [new Decimal(0.001), '0'],
//     [new Decimal(0.0), '0'],
//     [new Decimal(1.0), '100'],
//     [new Decimal(1.2), '120'],
//     [new Decimal(-1.2), '-120'],
//   ])('formats decimal percentage value %s to %s', (input: Decimal, expectedOutput: string) => {
//     // when
//     const result = formatDecimalPercentage(input);

//     // then
//     expect(result).toEqual(expectedOutput);
//   });
// });
