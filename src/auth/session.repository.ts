import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';

import { Session } from './session.entity';

@Injectable()
export class SessionRepository extends Repository<Session> {
  constructor(dataSource: DataSource) {
    super(Session, dataSource.createEntityManager());
  }
}
