import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/entities/abstract.entity';

@Entity('expansions')
export class Expansion extends AbstractEntity {
  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  imageUrl?: string;

  @Column()
  totalCards: number;

  @Column()
  points: string;
}
