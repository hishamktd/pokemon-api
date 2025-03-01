import { DataSource, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { allowedSortFields } from './types.constants';
import { TypesEntity } from './types.entity';
import { DEFAULT_SORT_FIELD } from '../../common/constants';
import { PaginationResDto } from '../../common/pagination/pagination.dto';
import { paginate } from '../../common/pagination/pagination.helper';
import { PaginationParams } from '../../common/pagination/pagination.interface';

@Injectable()
export class TypesRepository extends Repository<TypesEntity> {
  constructor(
    dataSource: DataSource,
    @InjectRepository(TypesEntity)
    private readonly repo: Repository<TypesEntity>,
  ) {
    super(TypesEntity, dataSource.createEntityManager());
  }

  async findPaginated({
    page,
    size,
    query,
    sortBy,
    order,
  }: PaginationParams): Promise<PaginationResDto<TypesEntity>> {
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
