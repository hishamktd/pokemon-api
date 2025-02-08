import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import { AbstractDto } from '../../common/dtos/abstract.dto';

export class ExpansionDto extends AbstractDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  totalCards: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  points: string;
}
