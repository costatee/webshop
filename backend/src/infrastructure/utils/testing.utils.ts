// import { EventEmitterModule } from '@nestjs/event-emitter';
// import { Test, TestingModule } from '@nestjs/testing';
// import { ModuleMetadata } from '@nestjs/common';

// import { LoggerService, LoggerServiceMock } from '../service/logger';
// import { MockingService } from '../service/mocking';
// import { EVENT_MODULE_OPTIONS, EventService } from '../service/event';
// import { PrismaModuleMock } from '../database/prisma/prisma.module.mock';


// /**
//  * Creates testing module with predefined mocked providers, eg. `PrismaService`, `Logger`
//  */
// export const createTestingModule = (data: {
//   imports?: ModuleMetadata['imports'];
//   providers?: ModuleMetadata['providers'];
//   controllers?: ModuleMetadata['controllers'];
// }): Promise<TestingModule> =>
//   Test.createTestingModule({
//     imports: [
//       EventEmitterModule.forRoot(EVENT_MODULE_OPTIONS),
//       PrismaModuleMock,
//       ...(data.imports ?? []),
//     ],
//     controllers: [...(data.controllers ?? [])],
//     providers: [
//       { provide: LoggerService, useClass: LoggerServiceMock },

//       MockingService,
//       EventService,
//       ...(data.providers ?? []),
//     ],
//   }).compile();
