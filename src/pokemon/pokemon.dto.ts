import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import { Stage } from './pokemon.enum';
import { PaginationDto } from '../common/pagination/pagination.dto';
import { TransformValue } from '../common/pagination/pagination.interface';

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
}

export class PokemonParamsDto extends PaginationDto {
  @IsOptional()
  @IsString({ message: 'Order must be a string' })
  @Transform(({ value }: TransformValue) => {
    const stage = value?.toUpperCase();
    return stage;
  })
  stage?: Stage;
}
