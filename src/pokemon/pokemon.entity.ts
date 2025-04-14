import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { Gender, Stage } from './pokemon.enum';
import { Cards } from '../cards/cards.entity';
import { AbstractEntity } from '../common/entities/abstract.entity';
import { Types } from '../masters/types/types.entity';

@Entity('pokemon')
export class Pokemon extends AbstractEntity {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', nullable: true })
  imageUrl?: string;

  @Column({ type: 'int' })
  typeId: number;

  @ManyToOne(() => Types, (type) => type.pokemon, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'typeId' })
  type: Types;

  @Column({ type: 'enum', enum: Stage, default: Stage.BASIC })
  stage: Stage;

  @Column({ type: 'int', nullable: true })
  evolvedFromId?: number;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.evolutions, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'evolvedFromId' })
  evolvedFrom?: Pokemon;

  @OneToMany(() => Pokemon, (pokemon) => pokemon.evolvedFrom)
  evolutions: Pokemon[];

  @Column({ type: 'enum', enum: Gender, nullable: true })
  gender: Gender;

  @Column({ type: 'boolean', default: false })
  isFossil: boolean;

  @OneToMany(() => Cards, (card) => card.pokemon)
  card: Cards[];
}
