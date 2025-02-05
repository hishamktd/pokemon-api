import { Module } from '@nestjs/common';
import { ExpansionsRepository } from './expansions.repository';
import { ExpansionsService } from './expansions.service';

@Module({
  providers: [ExpansionsRepository, ExpansionsService],
  exports: [],
})
export class ExpansionsModule {}
