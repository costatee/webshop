import { HttpException, HttpStatus } from '@nestjs/common';

import { NamedError } from '../../utils/error.utils';

export interface HttpErrorResponse {
  name?: string;
  message?: string;
  payload?: unknown;
  status: HttpStatus;
}

const getHttpErrorResponse = (reponse: HttpErrorResponse): HttpErrorResponse =>
  reponse;

const getErrorPayload = (errorPayload: unknown): unknown =>
  errorPayload instanceof Error
    ? {
        name: errorPayload.name,
        message: errorPayload.message,
        stack: errorPayload.stack,
      }
    : errorPayload;

export class HttpError extends HttpException {
  constructor(status: HttpStatus, error?: unknown) {
    if (error instanceof NamedError) {
      super(
        getHttpErrorResponse({
          name: error.name,
          message: error.message,
          payload: getErrorPayload(error.payload),
          status,
        }),
        status,
      );
    } else if (error instanceof Error) {
      super(
        getHttpErrorResponse({
          name: error.name,
          message: error.message,
          status,
        }),
        status,
      );
    } else if (typeof error === 'string') {
      super(
        getHttpErrorResponse({ name: 'Unknown error', message: error, status }),
        status,
      );
    } else if (error) {
      super(
        getHttpErrorResponse({
          message: `Unknown error received: "${JSON.stringify(error)}"`,
          name: 'Unknown error',
          status,
        }),
        status,
      );
    } else {
      super(getHttpErrorResponse({ status }), status);
    }
  }
}
