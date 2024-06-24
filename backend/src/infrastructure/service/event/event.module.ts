import { Global, Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { EventService } from './event.service';
import { LoggerService } from '../logger';

export const EVENT_MODULE_OPTIONS = {
  wildcard: false,
  delimiter: '.',
  verboseMemoryLeak: true,
};

@Global()
@Module({
  imports: [EventEmitterModule.forRoot(EVENT_MODULE_OPTIONS)],
  providers: [EventService, LoggerService],
  exports: [EventService],
})
export class EventModule {}
