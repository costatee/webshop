import { Inject, Injectable } from '@nestjs/common';
import {
  CreateUserReturn,
  CreateUserParams,
} from 'src/app/users/common/types/user.types';

import {
  IUserRepository,
  IUserepositoryToken,
} from 'src/app/users/domain/repositories/user-repository.interface';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject(IUserepositoryToken)
    private readonly userRepository: IUserRepository,
  ) {}

  async run(params: CreateUserParams): Promise<CreateUserReturn> {
    return this.userRepository.createUser(params);
  }
}
