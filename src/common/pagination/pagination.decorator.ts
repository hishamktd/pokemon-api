import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { PaginationParams } from './pagination.interface';

export const Pagination = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): PaginationParams => {
    const request: { query: { [key: string]: string } } = ctx
      .switchToHttp()
      .getRequest();
    const query = request?.query;

    return {
      page: Math.max(parseInt(query.page, 10) || 1, 1),
      size: Math.max(parseInt(query.limit, 10) || 10, 1),
      query: query.query || '',
      sortBy: query.sortBy || 'createdAt',
      order: query.order?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC',
    };
  },
);
