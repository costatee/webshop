import {
  CreateUserParams,
  CreateUserReturn,
} from '../../common/types/user.types';

export const IUserepositoryToken = Symbol('UserepositoryToken');
export interface IUserRepository {
  createUser(params: CreateUserParams): Promise<CreateUserReturn>;
}
