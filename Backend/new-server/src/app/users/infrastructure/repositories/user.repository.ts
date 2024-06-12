import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../../../infrastructure/database';
import { IUserRepository } from '../../domain/repositories/user-repository.interface';
import {
  CreateUserParams,
  CreateUserReturn,
} from '../../common/types/user.types';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(params: CreateUserParams): Promise<CreateUserReturn> {
    return await this.prismaService.user.create({
      data: {
        ...params,
      },
    });
  }
}
