import { DataSource, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { allowedSortFields } from './expansions.constants';
import { Expansion } from './expansions.entity';
import { DEFAULT_SORT_FIELD } from '../../common/constants';
import { PaginationResDto } from '../../common/pagination/pagination.dto';
import { paginate } from '../../common/pagination/pagination.helper';
import { PaginationParams } from '../../common/pagination/pagination.interface';

@Injectable()
export class ExpansionsRepository extends Repository<Expansion> {
  constructor(
    dataSource: DataSource,
    @InjectRepository(Expansion)
    private readonly repo: Repository<Expansion>,
  ) {
    super(Expansion, dataSource.createEntityManager());
  }

  async findPaginated({
    page,
    size,
    query,
    sortBy,
    order,
  }: PaginationParams): Promise<PaginationResDto<Expansion>> {
    const queryBuilder = this.repo.createQueryBuilder('expansion');

    if (query) {
      queryBuilder.andWhere(
        '(expansion.name ILIKE :search OR CAST(expansion.totalCards AS TEXT) ILIKE :search OR CAST(expansion.points AS TEXT) ILIKE :search)',
        { search: `%${query}%` },
      );
    }

    if (!allowedSortFields.includes(sortBy || DEFAULT_SORT_FIELD)) {
      sortBy = DEFAULT_SORT_FIELD;
    }

    queryBuilder.orderBy(`expansion.${sortBy}`, order);

    return await paginate(queryBuilder, page, size);
  }
}
