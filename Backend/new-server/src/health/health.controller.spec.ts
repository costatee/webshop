import { HealthCheckService } from '@nestjs/terminus';
import { Test, TestingModule } from '@nestjs/testing';

import { HealthController } from './health.controller';
import { HealthModule } from './health.module';
import { PrismaHealthIndicator } from '../infrastructure/database/prisma/prisma.health.indicator';
import { PrismaModule } from '../infrastructure/database';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HealthModule, PrismaModule],
      controllers: [HealthController],
      providers: [
        {
          provide: HealthCheckService,
          useValue: {},
        },
        {
          provide: PrismaHealthIndicator,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    console.log(controller.check());

    expect(controller).toBeDefined();
  });

  describe('check()', () => {
    it('should return up status', () => {
      const okResult = {
        details: {
          prisma: {
            status: 'up',
          },
        },
      };
      expect(controller.check()).resolves.toMatchObject(okResult);
    });
  });
});
