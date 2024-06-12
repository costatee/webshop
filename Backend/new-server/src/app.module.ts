import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  LoggerModule,
  DEFAULT_LOGGER_MODULE_PARAMS,
} from './infrastructure/service/logger';
import { UsersModule } from './app/users/user.module';
import { PrismaModule } from './infrastructure/database/prisma';
@Module({
  imports: [
    PrismaModule,
    LoggerModule.forRoot(DEFAULT_LOGGER_MODULE_PARAMS),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
