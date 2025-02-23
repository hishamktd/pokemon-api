import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExpansionsController } from './expansions.controller';
import { Expansion } from './expansions.entity';
import { ExpansionsRepository } from './expansions.repository';
import { ExpansionsService } from './expansions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Expansion])],
  providers: [ExpansionsRepository, ExpansionsService],
  controllers: [ExpansionsController],
})
export class ExpansionsModule {}
