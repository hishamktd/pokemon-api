import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

import { PaginationDto } from './pagination.dto';
import { PaginationParams } from './pagination.interface';

export const Pagination = <T extends ClassConstructor<PaginationDto>>(
  DtoClass?: T,
) =>
  createParamDecorator(
    (data: unknown, ctx: ExecutionContext): PaginationParams => {
      const request: { query: { [key: string]: string } } = ctx
        .switchToHttp()
        .getRequest();
      const query = request?.query || {};

      const paginationParams = plainToInstance(
        DtoClass ?? PaginationDto,
        query,
        {
          enableImplicitConversion: true,
        },
      );

      const errors = validateSync(paginationParams);

      if (errors.length > 0) {
        const errorMessages = errors
          .map((err) => Object.values(err.constraints || {}).join(', '))
          .join('; ');

        throw new BadRequestException(
          `Invalid pagination parameters: ${errorMessages}`,
        );
      }

      return paginationParams;
    },
  )();
