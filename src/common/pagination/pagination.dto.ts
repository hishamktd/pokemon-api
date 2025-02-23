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
  @IsInt({ message: 'Page must be an integer' })
  @Min(1, { message: 'Page must be greater than or equal to 1' })
  @Transform(({ value }: TransformValue) => parseInt(value, 10) || DEFAULT_PAGE)
  page: number = DEFAULT_PAGE;

  @IsInt({ message: 'Size must be an integer' })
  @Min(1, { message: 'Size must be greater than or equal to 1' })
  @Max(MAX_PAGE_SIZE, {
    message: `Size must be less than or equal to ${MAX_PAGE_SIZE}`,
  })
  @Transform(({ value }: TransformValue) => parseInt(value, 10) || DEFAULT_SIZE)
  size: number = DEFAULT_SIZE;

  @IsOptional()
  @IsString({ message: 'Query must be a string' })
  query?: string = '';

  @IsOptional()
  @IsString({ message: 'SortBy must be a string' })
  @Transform(({ value }: TransformValue) => value || DEFAULT_SORT_FIELD)
  sortBy?: string = DEFAULT_SORT_FIELD;

  @IsOptional()
  @IsString({ message: 'Order must be a string' })
  @Transform(({ value }: TransformValue) => value || DEFAULT_SORT_ORDER)
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
