import { Prisma } from '@prisma/client';

export type CreateUserParams = Prisma.UserCreateInput;

export type CreateUserReturn = {
  id: string;
  email: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
  active: boolean;
  phoneNumber: string;
  lastLoginAt: Date;
  activeCompanyContextId: string;
};
