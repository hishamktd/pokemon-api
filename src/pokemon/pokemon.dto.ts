import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import { Stage } from './pokemon.enum';

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
