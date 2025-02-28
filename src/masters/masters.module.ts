import { Module } from '@nestjs/common';

import { ExpansionsModule } from './expansions/expansions.module';
import { TypesModule } from './types/types.module';

@Module({
  imports: [ExpansionsModule, TypesModule],
  providers: [],
  exports: [ExpansionsModule, TypesModule],
})
export class MastersModule {}
