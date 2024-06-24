// import { applyDecorators, CanActivate, UseGuards } from '@nestjs/common';
// import { ApiForbiddenResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

// import { CongnitoAuthGuard } from './cognito';
// import { UnverifiedCompanyGuard } from './company';
// import { CompanyRolesGuard, UserRolesGuard } from './roles';

// // eslint-disable-next-line
// export const AuthGuards = (...aditionalGuards: (CanActivate | Function)[]) => {
//   return applyDecorators(
//     UseGuards(UserRolesGuard, CompanyRolesGuard, UnverifiedCompanyGuard, ...aditionalGuards),
//     ApiUnauthorizedResponse(),
//     ApiForbiddenResponse()
//   );
// };
