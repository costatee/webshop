import { Global, Module } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule, Params } from 'nestjs-pino';

import { LoggerService } from './logger.service';
import { isProduction } from '../../utils/env.utils';

export const DEFAULT_LOGGER_MODULE_PARAMS: Params = {
  pinoHttp: {
    customProps: () => ({
      context: 'HTTP',
    }),
    transport: isProduction()
      ? undefined
      : {
          target: 'pino-pretty',
          options: {
            colorize: true,
            singleLine: true,
          },
        },
  },
};

/**
 * @TODO
 * - Figure out how to make the LoggerModule globally registered in the `app.module`.
 * - Currently it does not work because extension of `PinoLoggerModule` doesn't take into consideration `@Global()` decorator.
 */
@Global()
@Module({
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule extends PinoLoggerModule {}
