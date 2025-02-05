import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Expansion } from './expansions.entity';

@Injectable()
export class ExpansionsRepository extends Repository<Expansion> {
  constructor(dataSource: DataSource) {
    super(Expansion, dataSource.createEntityManager());
  }
}
