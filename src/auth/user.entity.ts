import { Entity, Column, Unique } from 'typeorm';

import { AbstractEntity } from '../common/entities/abstract.entity';

@Entity()
@Unique(['email'])
export class User extends AbstractEntity {
  @Column()
  email: string;

  @Column()
  password: string;
}
