import { DataSource, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { allowedSortFields } from './types.constants';
import { DEFAULT_SORT_FIELD } from '../../common/constants';
import { PaginationResDto } from '../../common/pagination/pagination.dto';
import { paginate } from '../../common/pagination/pagination.helper';
import { PaginationParams } from '../../common/pagination/pagination.interface';

@Injectable()
export class TypesRepository extends Repository<TypesRepository> {
  constructor(
    dataSource: DataSource,
    @InjectRepository(TypesRepository)
    private readonly repo: Repository<TypesRepository>,
  ) {
    super(TypesRepository, dataSource.createEntityManager());
  }

  async findPaginated({
    page,
    size,
    query,
    sortBy,
    order,
  }: PaginationParams): Promise<PaginationResDto<TypesRepository>> {
    const queryBuilder = this.repo.createQueryBuilder('types');

    if (query) {
      queryBuilder.andWhere(
        '(types.name ILIKE :search OR CAST(types.color AS TEXT) ILIKE :search)',
        { search: `%${query}%` },
      );
    }

    if (!allowedSortFields.includes(sortBy || DEFAULT_SORT_FIELD)) {
      sortBy = DEFAULT_SORT_FIELD;
    }

    queryBuilder.orderBy(`types.${sortBy}`, order);

    return await paginate(queryBuilder, page, size);
  }
}
