import { Observable, fromEvent } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { LoggerService } from '../logger/logger.service';
import { DomainEvent } from './event.interface';

@Injectable()
export class EventService {
  constructor(
    private readonly eventEmitter: EventEmitter2,
    private readonly loggerService: LoggerService,
  ) {
    loggerService.setContext('EventService');
  }

  /**
   * Returns stream of observed events
   *
   * @param event DomainEvent
   * @returns Observable<DomainEvent>
   */
  observe<T extends DomainEvent<unknown>>(eventType: string): Observable<T> {
    return fromEvent(this.eventEmitter, eventType) as Observable<T>;
  }

  /**
   * Dispatches an event without waiting for event handlers completion
   * @param event `DomainEvent`
   * @returns `boolean`
   */
  emit<T>(event: DomainEvent<T>) {
    this.logOutgoingEvent(event);

    return this.eventEmitter.emit(event.type, event);
  }

  /**
   * Dispatches an event and waits for all registered event handlers to complete
   * @param event `DomainEvent`
   * @returns `Promise<any>[]`
   */
  async emitAsync<T>(event: DomainEvent<T>) {
    this.logOutgoingEvent(event);

    return this.eventEmitter.emitAsync(event.type, event);
  }

  private logOutgoingEvent(event: DomainEvent<unknown>) {
    this.loggerService.log(`[EVENT_OUT]: ${event.type}`);
  }
}
