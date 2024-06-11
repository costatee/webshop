import { orderByDatesDistanceFromNowAsc } from './ord.utils';

describe('#sortingByDatesDistanceFromNowAsc', () => {
  test('returns negative value if the first date is closer to now than the second and it is in the past', () => {
    // given
    const firstDate = new Date(new Date().getTime() - 8000);
    const secondDate = new Date(new Date().getTime() - 18000);

    // when
    const result = orderByDatesDistanceFromNowAsc(firstDate, secondDate);

    // then
    expect(result).toBeLessThan(0);
  });

  test('returns possitive value if the second date is closer to now than the second and it is in the past', () => {
    // given
    const firstDate = new Date(new Date().getTime() - 18000);
    const secondDate = new Date(new Date().getTime() - 8000);

    // when
    const result = orderByDatesDistanceFromNowAsc(firstDate, secondDate);

    // then
    expect(result).toBeGreaterThan(0);
  });

  test('returns negative value if the first date is closer to now than the second and it is in the future', () => {
    // given
    const firstDate = new Date(new Date().getTime() + 8000);
    const secondDate = new Date(new Date().getTime() + 18000);

    // when
    const result = orderByDatesDistanceFromNowAsc(firstDate, secondDate);

    // then
    expect(result).toBeLessThan(0);
  });

  test('returns possitive value if the second date is closer to now than the second and it is in the future', () => {
    // given
    const firstDate = new Date(new Date().getTime() + 18000);
    const secondDate = new Date(new Date().getTime() + 8000);

    // when
    const result = orderByDatesDistanceFromNowAsc(firstDate, secondDate);

    // then
    expect(result).toBeGreaterThan(0);
  });
});
