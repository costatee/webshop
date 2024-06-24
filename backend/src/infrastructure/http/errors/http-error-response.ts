import { ApiProperty } from '@nestjs/swagger';

export class ApiErrorResponseSubError {
  @ApiProperty({ example: 'user.email', required: false })
  path?: string;

  @ApiProperty({ example: 'isEmail' })
  code: string;

  @ApiProperty({ example: 'email has to have email format' })
  message: string;
}

export class ApiErrorResponse {
  @ApiProperty({ example: 400 })
  readonly status: number;

  @ApiProperty({
    example: 'isEmail',
    description:
      "For validation errors it's equal to the code of the first item of subErrors",
  })
  readonly code: string;

  @ApiProperty({
    example: 'email has to have email format',
    description:
      "For validation error it's equal to the message of the first item of subErrors",
  })
  readonly message: string;

  @ApiProperty({
    type: () => [ApiErrorResponseSubError],
    description: 'Optional list of sub-errors',
    nullable: true,
    required: false,
  })
  readonly subErrors?: ApiErrorResponseSubError[];

  constructor(body: ApiErrorResponse) {
    this.status = body.status;
    this.code = body.code;
    this.message = body.message;
    this.subErrors = body.subErrors;
  }
}
