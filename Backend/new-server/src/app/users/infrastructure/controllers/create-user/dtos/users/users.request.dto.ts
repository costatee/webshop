import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserRequestDTO {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  password: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  role: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  phoneNumber: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  activeCompanyContextId: string;
}
