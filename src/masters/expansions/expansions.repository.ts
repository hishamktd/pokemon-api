import { DataSource, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';

import { Expansion } from './expansions.entity';

@Injectable()
export class ExpansionsRepository extends Repository<Expansion> {
  constructor(dataSource: DataSource) {
    super(Expansion, dataSource.createEntityManager());
  }
}
