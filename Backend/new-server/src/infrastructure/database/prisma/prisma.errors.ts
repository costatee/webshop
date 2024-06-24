import { NamedError } from '../../utils/error.utils';

export class PrismaCreatedResourceNotFoundError extends NamedError {
  constructor(resourceId: string, resourceName: string) {
    super(
      'PrismaCreatedResourceNotFoundError',
      `Created resource "${resourceName}":"${resourceId}" was not found`,
    );
  }
}
