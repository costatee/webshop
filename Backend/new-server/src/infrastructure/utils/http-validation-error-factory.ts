import { BadRequestException, ValidationError } from '@nestjs/common';

import { ApiErrorResponse, ApiErrorResponseSubError } from '../http/errors';

export function httpValidationErrorFactory(errors: ValidationError[]) {
  const subErrors = errors.flatMap((error) =>
    mapChildrenToValidationErrors(error),
  );
  const response = new ApiErrorResponse({
    status: 400,
    code: subErrors[0].code,
    message: subErrors[0].message,
    subErrors,
  });

  return new BadRequestException(response);
}

function mapChildrenToValidationErrors(
  error: ValidationError,
  parentPath?: string,
): ApiErrorResponseSubError[] {
  if (!(error.children && error.children.length)) {
    return toApiValidationError(error);
  }

  const validationErrors: ApiErrorResponseSubError[] = [];
  parentPath = parentPath ? `${parentPath}.${error.property}` : error.property;

  for (const item of error.children) {
    if (item.children && item.children.length) {
      validationErrors.push(...mapChildrenToValidationErrors(item, parentPath));
    }
    validationErrors.push(...toApiValidationError(item, parentPath));
  }

  return validationErrors;
}

function toApiValidationError(
  error: ValidationError,
  parentPath?: string,
): ApiErrorResponseSubError[] {
  const path = parentPath ? `${parentPath}.${error.property}` : error.property;

  return error.constraints
    ? Object.entries(error.constraints).map(([code, message]) => ({
        path,
        code,
        message,
      }))
    : [];
}
