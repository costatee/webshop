import { Observable, defaultIfEmpty, firstValueFrom, takeUntil } from 'rxjs';

/**
 * Wait for first value (notification) from given observable stream or terminate
 * @param input$ Observable
 * @param terminator$ Observable
 * @returns Promise
 */
export const waitForFirstValueOrTerminate = (
  input$: Observable<unknown>,
  terminator$: Observable<unknown>,
): Promise<unknown> =>
  firstValueFrom(input$.pipe(takeUntil(terminator$), defaultIfEmpty(null)));
