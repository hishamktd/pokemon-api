import { SelectQueryBuilder } from 'typeorm';

import { PaginationMetaResDto } from './pagination-meta.dto';
import { PaginationResDto } from './pagination.dto';

export async function paginate<T extends object>(
  queryBuilder: SelectQueryBuilder<T>,
  page: number,
  size: number,
): Promise<PaginationResDto<T>> {
  const [data, total] = await queryBuilder
    .skip((page - 1) * size)
    .take(size)
    .getManyAndCount();

  const meta = new PaginationMetaResDto({
    pageOptionsDto: { page, size },
    itemCount: total,
  });

  return {
    data,
    meta,
  };
}
