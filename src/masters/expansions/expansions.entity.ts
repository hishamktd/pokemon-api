import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/entities/abstract.entity';

@Entity('expansions')
export class Expansion extends AbstractEntity {
  @Column()
  name: string;

  @Column()
  imageUrl: string | null;

  @Column()
  totalCards: number;

  @Column()
  points: string;
}
