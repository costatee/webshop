import { Injectable, Scope, ConsoleLogger } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class LoggerServiceMock extends ConsoleLogger {
  log() {
    return;
  }

  warn() {
    return;
  }

  error() {
    return;
  }

  audit() {
    return;
  }
}
