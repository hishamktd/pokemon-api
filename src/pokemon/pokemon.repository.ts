import { DataSource, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';

import { allowedSortFields } from './pokemon.constants';
import { Pokemon } from './pokemon.entity';
import { PokemonGetAllRes } from './pokemon.interface';
import { DEFAULT_SORT_FIELD } from '../common/constants';
import { PaginationResDto } from '../common/pagination/pagination.dto';
import { paginate } from '../common/pagination/pagination.helper';
import { PaginationParams } from '../common/pagination/pagination.interface';
import { getSortField } from '../common/utils/get-sort-field';

@Injectable()
export class PokemonRepository extends Repository<Pokemon> {
  constructor(private readonly dataSource: DataSource) {
    super(Pokemon, dataSource.createEntityManager());
  }

  async findAll(): Promise<PokemonGetAllRes[]> {
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
  }: PaginationParams): Promise<PaginationResDto<Pokemon>> {
    const queryBuilder = this.createQueryBuilder('pokemon')
      .leftJoin('pokemon.type', 'type')
      .addSelect('type.name', 'typeName');

    if (query) {
      queryBuilder.andWhere(
        '(pokemon.name ILIKE :search OR type.name ILIKE :search OR type.color ILIKE :search)',
        {
          search: `%${query}%`,
        },
      );
    }

    sortBy = getSortField(sortBy, allowedSortFields);

    if (!allowedSortFields.includes(sortBy || DEFAULT_SORT_FIELD)) {
      sortBy = DEFAULT_SORT_FIELD;
    }

    if (sortBy === 'typeName') {
      queryBuilder.orderBy('type.name', order);
    } else {
      queryBuilder.orderBy(`pokemon.${sortBy}`, order);
    }

    return await paginate(queryBuilder, page, size);
  }
}
