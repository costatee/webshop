import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { HealthController } from './health.controller';
import { PrismaHealthIndicator } from '../infrastructure/database/prisma/prisma.health.indicator';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [PrismaHealthIndicator],
})
@Module({})
export class HealthModule {}
