import { Transform } from 'class-transformer';
import { IsArray } from 'class-validator';
import { IsInt, IsOptional, IsString, Min, Max } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import { PaginationMetaResDto } from './pagination-meta.dto';
import {
  DEFAULT_PAGE,
  DEFAULT_SIZE,
  MAX_PAGE_SIZE,
  DEFAULT_SORT_FIELD,
  DEFAULT_SORT_ORDER,
} from '../constants';
import { TransformValue } from './pagination.interface';

export class PaginationDto {
  @IsInt()
  @Min(1)
  @Transform(({ value }: TransformValue) => parseInt(value, 10) || DEFAULT_PAGE)
  page: number = DEFAULT_PAGE;

  @IsInt()
  @Min(1)
  @Max(MAX_PAGE_SIZE)
  @Transform(({ value }: TransformValue) => parseInt(value, 10) || DEFAULT_SIZE)
  size: number = DEFAULT_SIZE;

  @IsOptional()
  @IsString()
  query?: string = '';

  @IsOptional()
  @IsString()
  sortBy?: string = DEFAULT_SORT_FIELD;

  @IsOptional()
  @IsString()
  order?: 'ASC' | 'DESC' = DEFAULT_SORT_ORDER;
}

export class PaginationResDto<T> {
  @IsArray()
  @ApiProperty({ isArray: true })
  readonly data: T[];

  @ApiProperty({ type: () => PaginationMetaResDto })
  readonly meta: PaginationMetaResDto;

  constructor(data: T[], meta: PaginationMetaResDto) {
    this.data = data;
    this.meta = meta;
  }
}
