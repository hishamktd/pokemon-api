import { DataSource, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';

import { allowedSortFields } from './pokemon.constants';
import { Pokemon } from './pokemon.entity';
import {
  GetAllParams,
  PokemonGetAllRes,
  PokemonParams,
} from './pokemon.interface';
import { PaginationResDto } from '../common/pagination/pagination.dto';
import { paginate } from '../common/pagination/pagination.helper';
import { getSortField } from '../common/utils/get-sort-field';

@Injectable()
export class PokemonRepository extends Repository<Pokemon> {
  constructor(private readonly dataSource: DataSource) {
    super(Pokemon, dataSource.createEntityManager());
  }

  async findAll({ stage }: GetAllParams): Promise<PokemonGetAllRes[]> {
    const queryBuilder = this.createQueryBuilder('pokemon');

    if (stage && stage !== '') {
      queryBuilder.andWhere('pokemon.stage = :stage', { stage });
    }

    return queryBuilder.select(['pokemon.id', 'pokemon.name']).getMany();
  }

  async findPaginated({
    page,
    size,
    query,
    sortBy,
    order,
    stage,
  }: PokemonParams): Promise<PaginationResDto<Pokemon>> {
    const queryBuilder = this.createQueryBuilder('pokemon')
      .leftJoin('pokemon.type', 'type')
      .addSelect(['type.id', 'type.name', 'type.iconUrl', 'type.color'])
      .leftJoin('pokemon.evolvedFrom', 'evolvedFrom')
      .addSelect(['evolvedFrom.id', 'evolvedFrom.name', 'evolvedFrom.imageUrl'])
      .leftJoin('evolvedFrom.type', 'evolvedFromType')
      .addSelect([
        'evolvedFromType.id',
        'evolvedFromType.name',
        'evolvedFromType.iconUrl',
        'evolvedFromType.color',
      ]);

    if (query) {
      queryBuilder.where(
        '(pokemon.name ILIKE :search OR type.name ILIKE :search OR type.color ILIKE :search)',
        {
          search: `%${query}%`,
        },
      );
    }

    if (stage) {
      queryBuilder.andWhere('pokemon.stage = :stage', { stage });
    }

    sortBy = getSortField(sortBy, allowedSortFields);

    queryBuilder.orderBy(`pokemon.${sortBy}`, order);

    return await paginate(queryBuilder, page, size);
  }
}
