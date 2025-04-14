import { Column, Entity, OneToMany } from 'typeorm';

import { Cards } from '../../cards/cards.entity';
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

  @OneToMany(() => Cards, (card) => card.expansion)
  card: Cards[];
}
