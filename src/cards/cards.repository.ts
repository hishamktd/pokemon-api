import { DataSource, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';

import { allowedSortFields } from './cards.constant';
import { Cards } from './cards.entity';
import { CardGetAllRes } from './cards.interface';
import { PaginationResDto } from '../common/pagination/pagination.dto';
import { paginate } from '../common/pagination/pagination.helper';
import { PaginationParams } from '../common/pagination/pagination.interface';
import { getSortField } from '../common/utils/get-sort-field';

@Injectable()
export class CardsRepository extends Repository<Cards> {
  constructor(private readonly dataSource: DataSource) {
    super(Cards, dataSource.createEntityManager());
  }

  async findAll(): Promise<CardGetAllRes[]> {
    return await this.createQueryBuilder('card')
      .select(['card.id', 'card.name'])
      .getMany();
  }

  async findPaginated({
    page,
    size,
    query,
    sortBy,
    order,
  }: PaginationParams): Promise<PaginationResDto<Cards>> {
    const queryBuilder = this.createQueryBuilder('card');

    if (query) {
      queryBuilder.andWhere(
        '(card.name ILIKE :search OR CAST(card.cardType AS TEXT) ILIKE :search)',
        { search: `%${query}%` },
      );
    }

    sortBy = getSortField(sortBy, allowedSortFields);
    queryBuilder.orderBy(`card.${sortBy}`, order);

    return await paginate(queryBuilder, page, size);
  }
}
