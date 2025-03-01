import { DataSource, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';

import { allowedSortFields } from './types.constants';
import { Types } from './types.entity';
import { TypesGetAllRes } from './types.interface';
import { PaginationResDto } from '../../common/pagination/pagination.dto';
import { paginate } from '../../common/pagination/pagination.helper';
import { PaginationParams } from '../../common/pagination/pagination.interface';
import { getSortField } from '../../common/utils/get-sort-field';

@Injectable()
export class TypesRepository extends Repository<Types> {
  constructor(private readonly dataSource: DataSource) {
    super(Types, dataSource.createEntityManager());
  }

  async findAll(): Promise<TypesGetAllRes[]> {
    return this.createQueryBuilder('types')
      .select(['types.id', 'types.name'])
      .getMany();
  }

  async findPaginated({
    page,
    size,
    query,
    sortBy,
    order,
  }: PaginationParams): Promise<PaginationResDto<Types>> {
    const queryBuilder = this.createQueryBuilder('types');

    if (query) {
      queryBuilder.andWhere(
        '(types.name ILIKE :search OR CAST(types.color AS TEXT) ILIKE :search)',
        { search: `%${query}%` },
      );
    }

    sortBy = getSortField(sortBy, allowedSortFields);
    queryBuilder.orderBy(`types.${sortBy}`, order);

    return await paginate(queryBuilder, page, size);
  }
}
