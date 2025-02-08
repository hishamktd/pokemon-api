import { Module } from '@nestjs/common';
import { ExpansionsRepository } from './expansions.repository';
import { ExpansionsService } from './expansions.service';
import { ExpansionsController } from './expansions.controller';

@Module({
  providers: [ExpansionsRepository, ExpansionsService],
  controllers: [ExpansionsController],
  exports: [],
})
export class ExpansionsModule {}
