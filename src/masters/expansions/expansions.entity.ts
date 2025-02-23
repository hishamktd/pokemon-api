import { Column, DataSource, Entity, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';

import { AbstractEntity } from '../../common/entities/abstract.entity';

@Entity('expansions')
export class Expansion extends AbstractEntity {
  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  imageUrl?: string;

  @Column()
  totalCards: number;

  @Column({ type: 'text', nullable: true })
  points: string;
}

@Injectable()
export class ExpansionsRepository extends Repository<Expansion> {
  constructor(dataSource: DataSource) {
    super(Expansion, dataSource.createEntityManager());
  }
}
