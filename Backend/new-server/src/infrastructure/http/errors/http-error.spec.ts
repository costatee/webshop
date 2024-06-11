import { HttpStatus } from '@nestjs/common';

import { HttpError } from './http-error';
import { NamedError } from '../../utils/error.utils';

describe('HttpError', () => {
  test('creates object for an error param instance of "Error"', () => {
    // given
    const error = new Error('Some error message');
    const status = HttpStatus.CONFLICT;

    // when
    const result = new HttpError(status, error);

    // then
    expect(result.getResponse()).toEqual({
      message: 'Some error message',
      name: 'Error',
      status,
    });
  });

  test('creates object for an error param instance of "NamedError"', () => {
    // given
    const error = new NamedError('SomeErrorCode', 'Some error message');
    const status = HttpStatus.CONFLICT;

    // when
    const result = new HttpError(status, error);

    // then
    expect(result.getResponse()).toEqual({
      message: 'Some error message',
      name: 'SomeErrorCode',
      status,
    });
  });

  test('creates object for an error param type of "string"', () => {
    // given
    const error = 'Some error message';
    const status = HttpStatus.CONFLICT;

    // when
    const result = new HttpError(status, error);

    // then
    expect(result.getResponse()).toEqual({
      message: 'Some error message',
      name: 'Unknown error',
      status,
    });
  });

  test('creates object for an error param of unknown type', () => {
    // given
    const error = { data: 'Some error message from object' };
    const status = HttpStatus.CONFLICT;

    // when
    const result = new HttpError(status, error);

    // then
    expect(result.getResponse()).toEqual({
      message:
        'Unknown error received: "{"data":"Some error message from object"}"',
      name: 'Unknown error',
      status,
    });
  });

  test('creates object when no error is passed', () => {
    // given
    const error = undefined;
    const status = HttpStatus.CONFLICT;

    // when
    const result = new HttpError(status, error);

    // then
    expect(result.getResponse()).toEqual({
      status,
    });
  });
});
