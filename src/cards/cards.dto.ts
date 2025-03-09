import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import { CardType } from './cards.enum';

export class CardsDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  thumbnailUrl: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsEnum(CardType)
  cardType: CardType;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  typeId: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  pokemonId?: number;
}
