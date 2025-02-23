import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

import { PaginationDto } from './pagination.dto';
import { PaginationParams } from './pagination.interface';

export const Pagination = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): PaginationParams => {
    const request: { query: { [key: string]: string } } = ctx
      .switchToHttp()
      .getRequest();
    const query = request?.query || {};

    const paginationParams = plainToInstance(PaginationDto, query, {
      enableImplicitConversion: true,
    });

    const errors = validateSync(paginationParams);

    if (errors.length > 0) {
      throw new BadRequestException(
        `Invalid pagination parameters: ${errors.map((e) => e.toString()).join(', ')}`,
      );
    }

    return paginationParams;
  },
);
