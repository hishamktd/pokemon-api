import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { User } from './user.entity';
import { AbstractEntity } from '../common/entities/abstract.entity';

@Entity()
export class Session extends AbstractEntity {
  @Column()
  token: string;

  @Column()
  expiresAt: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: number;
}
