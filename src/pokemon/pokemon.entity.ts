import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

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
}
