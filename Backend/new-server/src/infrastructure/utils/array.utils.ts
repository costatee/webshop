export function uniq<T>(items: T[]): T[] {
  return [...new Set(items)];
}

export function uniqRecordByKey<T extends { id: string }>(
  items: T[],
  uniqByKey: keyof T = 'id',
): T[] {
  return [...new Map(items.map((item) => [item[uniqByKey], item])).values()];
}

export const groupBy = <T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => string,
) =>
  array.reduce(
    (acc, value, index, array) => {
      (acc[predicate(value, index, array)] ||= []).push(value);
      return acc;
    },
    {} as { [key: string]: T[] },
  );

export const containsSome =
  <T, U extends T = T>(target: T[] | ReadonlyArray<T>) =>
  (check: U[]): boolean =>
    check.some((item) => target.includes(item));

export const last = <T>(target: T[]): T => target[target.length - 1];

export const head = <T>(target: T[]): T => target[0];

export const arrayDisjoint = <T>(array1: T[], array2: T[]): T[] => {
  const set2 = new Set(array2);
  return array1.filter((item) => !set2.has(item));
};

export const isArrayEqual = <T>(array1: T[], array2: T[]): boolean =>
  array1.length === array2.length &&
  array1.every((item, index) => item === array2[index]);
