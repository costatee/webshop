export type WithId<T> = T & {
  id: string;
};

export const isDefined = <T>(value: T | undefined | null): value is T =>
  value !== null && value !== undefined;

export const isDefinedAndNotEmpty = <T>(
  value: T | undefined | null,
): value is T => {
  return (
    isDefined(value) && !(typeof value === 'string' && value.trim() === '')
  );
};

export const mapPrismaJsonToObject = <T>(value: unknown): T => value as T;
