import { IsArray } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import { PaginationMetaResDto } from './pagination-meta.dto';

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
