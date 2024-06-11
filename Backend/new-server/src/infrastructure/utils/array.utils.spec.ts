import { arrayDisjoint, containsSome, isArrayEqual, last } from './array.utils';

describe('#containsSome', () => {
  test('returns "true" if the list contains the target subset', () => {
    // given
    const target = ['A', 'B', 'C'];
    const check = ['B', 'C'];

    // when
    const result = containsSome(target)(check);

    // then
    expect(result).toBe(true);
  });

  test('returns "true" if only one element matches the target array', () => {
    // given
    const target = ['A', 'B', 'C'];
    const check = ['B', 'D'];

    // when
    const result = containsSome(target)(check);

    // then
    expect(result).toBe(true);
  });

  test('returns "false" if the list doesn\'t contain the target subset', () => {
    // given
    const target = ['A', 'B', 'C'];
    const check = ['D', 'E'];

    // when
    const result = containsSome(target)(check);

    // then
    expect(result).toBe(false);
  });
});

describe('#last', () => {
  test('returns last element from an array', () => {
    // given
    const target = ['A', 'B', 'C'];

    // when
    const result = last(target);

    // then
    expect(result).toBe('C');
  });

  test('returns "undefined" if array is empty', () => {
    // given
    const target = [];

    // when
    const result = last(target);

    // then
    expect(result).toBe(undefined);
  });
});

describe('#arrayDisjoint', () => {
  test('returns not existing elements of second array', () => {
    // given
    const array1 = ['A', 'B', 'C'];
    const array2 = ['B', 'C'];

    // when
    const result = arrayDisjoint(array1, array2);

    // then
    expect(result).toEqual(['A']);
  });

  test('returns empty list if elements if first array elements are contained in second array', () => {
    // given
    const array1 = ['B', 'C'];
    const array2 = ['A', 'B', 'C'];

    // when
    const result = arrayDisjoint(array1, array2);

    // then
    expect(result).toEqual([]);
  });
});

describe('#isArrayEqual', () => {
  test('returns "TRUE" if two arrays are equal', () => {
    // given
    const array1 = ['A', 'B', 'C'];
    const array2 = ['A', 'B', 'C'];

    // when
    const result = isArrayEqual(array1, array2);

    // then
    expect(result).toEqual(true);
  });

  test('returns "FALSE" if two arrays are not equal', () => {
    // given
    const array1 = ['A', 'B', 'C'];
    const array2 = ['A', 'B', 'C', 'D'];

    // when
    const result = isArrayEqual(array1, array2);

    // then
    expect(result).toEqual(false);
  });
});
