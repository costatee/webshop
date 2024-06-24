/**
 * Sorting function base on the distance of the item relevant date to current one.
 * Sorting is based on distance ASC
 */
export const orderByDatesDistanceFromNowAsc = (a: Date, b: Date): number => {
  const now = new Date().getTime();
  const diffA = Math.abs(a.getTime() - now);
  const diffB = Math.abs(b.getTime() - now);
  return diffA - diffB;
};
