/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserService } from 'src/app/users/application/services/create-user/create-user.service';
import { CreateUserRequestDTO } from './dtos/users/users.request.dto';

// import { AllowUnverifiedCompany, AuthGuards } from '../../../../../infrastructure/auth';

@Controller({
  path: 'register',
  version: '1',
})
@ApiTags('users')
// @AuthGuards()
// @UseFilters(new CountriesExceptionFilter())
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  //   @AllowUnverifiedCompany()
  //   @ApiOkResponse({ type: GetCountriesResponseDto, isArray: true })
  //   @ApiOperation({ operationId: 'getCountries' })
  @Post('/')
  @ApiBody({
    type: CreateUserRequestDTO,
  })
  async run(@Body() createUserRequestDTO: CreateUserRequestDTO) {
    const user = await this.createUserService.run({ ...createUserRequestDTO });
    return user;
  }
}
