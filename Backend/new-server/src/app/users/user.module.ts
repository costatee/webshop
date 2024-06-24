import { Module } from '@nestjs/common';

import { LoggerService } from '../../infrastructure/service/logger';
import { CreateUserService } from './application/services/create-user/create-user.service';
import { IUserepositoryToken } from './domain/repositories/user-repository.interface';
import { CreateUserController } from './infrastructure/controllers/create-user/create-user.controller';
import { UserRepository } from './infrastructure/repositories/user.repository';
@Module({
  imports: [],
  exports: [],
  controllers: [CreateUserController],
  providers: [
    CreateUserService,
    LoggerService,
    {
      provide: IUserepositoryToken,
      useClass: UserRepository,
    },
  ],
})
export class UsersModule {}
