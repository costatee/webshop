import { HttpStatus } from '@nestjs/common';

import { HttpError } from './http-error';

export class InternalServerHttpError extends HttpError {
  constructor(error?: unknown) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, error);
  }
}

export class NotFoundHttpError extends HttpError {
  constructor(error?: unknown) {
    super(HttpStatus.NOT_FOUND, error);
  }
}

export class ConflictHttpError extends HttpError {
  constructor(error?: unknown) {
    super(HttpStatus.CONFLICT, error);
  }
}

export class ForbiddenHttpError extends HttpError {
  constructor(error?: unknown) {
    super(HttpStatus.FORBIDDEN, error);
  }
}

export class NotImplementedError extends HttpError {
  constructor(error?: unknown) {
    super(HttpStatus.NOT_IMPLEMENTED, error);
  }
}

export class BadRequestHttpError extends HttpError {
  constructor(error?: unknown) {
    super(HttpStatus.BAD_REQUEST, error);
  }
}
