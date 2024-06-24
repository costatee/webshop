import { Injectable, Scope, ConsoleLogger } from '@nestjs/common';
import pinoLogger from 'pino';

import { PrismaService } from '../../database';
import { isProduction } from '../../utils/env.utils';

export interface ErrorLogMessage {
  code?: string;
  message: string;
  payload?: { [key: string]: unknown };
  method: string;
}

interface ErrorMessage {
  code?: number | string;
  message: string;
  method: string;
  payload?: { [key: string]: unknown }; // Passed to the method, no sensitive info
  timestamp: Date; // Added in logging function
  serviceName: string; // Added in logging function
}

@Injectable({ scope: Scope.DEFAULT })
export class LoggerService extends ConsoleLogger {
  private pinoLogger = pinoLogger({
    transport: !isProduction()
      ? {
          target: 'pino-pretty',
          options: {
            colorize: true,
            singleLine: true,
          },
        }
      : undefined,
  });
  context: string;

  constructor(
    context: string,
    private readonly prisma?: PrismaService,
  ) {
    super();
    this.context = context;
  }

  private createErrorMessage = (
    error: ErrorLogMessage,
    context: string,
  ): ErrorMessage => {
    const payload =
      error?.payload instanceof Error
        ? { name: error.payload.name, message: error.payload.message }
        : error.payload;

    return {
      message: error.message,
      code: error?.code,
      timestamp: new Date(),
      serviceName: context,
      method: error.method,
      payload,
    };
  };

  log(message: unknown, optionalParams?) {
    this.pinoLogger.info(message, optionalParams);
  }

  warn(error: ErrorLogMessage, optionalParams?) {
    const errorMessage = this.createErrorMessage(error, this.context);
    this.pinoLogger.error(errorMessage, optionalParams);
  }

  error(error: ErrorLogMessage, optionalParams?) {
    const errorMessage = this.createErrorMessage(error, this.context);
    this.pinoLogger.error(errorMessage, optionalParams);
  }

  // audit(data: Prisma.AuditHistoryUncheckedCreateInput) {
  //   if (this?.prisma)
  //     this.prisma.auditHistory.create({ data }).catch((error) =>
  //       this.error({
  //         method: 'audit',
  //         message: error.toString(),
  //       }),
  //     );
  //   else
  //     this.error({
  //       method: 'audit',
  //       message: 'prisma not defined',
  //     });
  // }
}
