import { Module } from '@nestjs/common';

import { ExpansionsModule } from './expansions/expansions.module';

@Module({
  imports: [ExpansionsModule],
  providers: [],
  exports: [ExpansionsModule],
})
export class MastersModule {}
