import { Module } from '@nestjs/common';

import { ExpansionsController } from './expansions.controller';
import { ExpansionsRepository } from './expansions.repository';
import { ExpansionsService } from './expansions.service';

@Module({
  providers: [ExpansionsRepository, ExpansionsService],
  controllers: [ExpansionsController],
  exports: [],
})
export class ExpansionsModule {}
