import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { CardType } from './cards.enum';
import { AbstractEntity } from '../common/entities/abstract.entity';
import { Expansion } from '../masters/expansions/expansions.entity';
import { Types } from '../masters/types/types.entity';
import { Pokemon } from '../pokemon/pokemon.entity';

@Entity('pokemon')
export class Cards extends AbstractEntity {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'enum', enum: CardType })
  cardType: CardType;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  thumbnailUrl: string;

  @Column({ type: 'int', nullable: true })
  typeId: number;

  @ManyToOne(() => Types, (type) => type.card, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'typeId' })
  type: Types;

  @Column({ type: 'int', nullable: true })
  pokemonId: number;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.card, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'typeId' })
  pokemon: Pokemon;

  @Column({ type: 'int' })
  expansionId: number;

  @ManyToOne(() => Expansion, (expansion) => expansion.card, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'typeId' })
  expansion: Expansion;
}
