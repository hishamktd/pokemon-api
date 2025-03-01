import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../common/entities/abstract.entity';
import { Pokemon } from '../../pokemon/pokemon.entity';

@Entity('types')
export class Types extends AbstractEntity {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  iconUrl: string;

  @Column({ type: 'text' })
  color: string;

  @OneToMany(() => Pokemon, (pokemon) => pokemon.type)
  pokemon: Pokemon[];
}
