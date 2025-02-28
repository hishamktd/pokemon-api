import { Column, Entity } from 'typeorm';

import { AbstractEntity } from 'src/common/entities/abstract.entity';

@Entity('types')
export class TypesEntity extends AbstractEntity {
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  iconUrl: string;

  @Column({ type: 'text' })
  color: string;
}
