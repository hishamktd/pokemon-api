import { DataSource, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';

import { allowedSortFields } from './expansions.constants';
import { Expansion } from './expansions.entity';
import { ExpansionsGetAllRes } from './expansions.interface';
import { PaginationResDto } from '../../common/pagination/pagination.dto';
import { paginate } from '../../common/pagination/pagination.helper';
import { PaginationParams } from '../../common/pagination/pagination.interface';
import { getSortField } from '../../common/utils/get-sort-field';

@Injectable()
export class ExpansionsRepository extends Repository<Expansion> {
  constructor(private readonly dataSource: DataSource) {
    super(Expansion, dataSource.createEntityManager());
  }

  async findAll(): Promise<ExpansionsGetAllRes[]> {
    return this.createQueryBuilder('expansion')
      .select(['expansion.id', 'expansion.name'])
      .getMany();
  }

  async findPaginated({
    page,
    size,
    query,
    sortBy,
    order,
  }: PaginationParams): Promise<PaginationResDto<Expansion>> {
    const queryBuilder = this.createQueryBuilder('expansion');

    if (query) {
      queryBuilder.andWhere(
        '(expansion.name ILIKE :search OR CAST(expansion.totalCards AS TEXT) ILIKE :search OR CAST(expansion.points AS TEXT) ILIKE :search)',
        { search: `%${query}%` },
      );
    }

    sortBy = getSortField(sortBy, allowedSortFields);
    queryBuilder.orderBy(`expansion.${sortBy}`, order);

    return await paginate(queryBuilder, page, size);
  }
}
