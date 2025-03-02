import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import { Gender, Stage } from './pokemon.enum';
import { PaginationDto } from '../common/pagination/pagination.dto';

export class PokemonDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  imageUrl: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  typeId: number;

  @ApiProperty({ enum: Stage })
  @IsNotEmpty()
  stage: Stage;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  evolvedFromId?: number;

  @ApiProperty({ enum: Gender })
  @IsString()
  @IsOptional()
  gender: Gender;
}

export function transformStage() {
  return Transform(({ value }) => {
    if (typeof value !== 'string') return '';
    const upperValue = value.toUpperCase();
    return Object.values(Stage).includes(upperValue as Stage)
      ? (upperValue as Stage)
      : '';
  });
}

export class GetAllParamsDto {
  @IsOptional()
  @IsString({ message: 'Stage must be BASIC, STAGE_1, STAGE_2' })
  @transformStage()
  stage?: Stage;
}

export class PokemonParamsDto extends PaginationDto {
  @IsOptional()
  @IsString({ message: 'Stage must be BASIC, STAGE_1, STAGE_2' })
  @transformStage()
  stage?: Stage;
}
