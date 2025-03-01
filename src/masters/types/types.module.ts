import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypesController } from './types.controller';
import { Types } from './types.entity';
import { TypesRepository } from './types.repository';
import { TypesService } from './types.service';

@Module({
  imports: [TypeOrmModule.forFeature([Types])],
  providers: [TypesService, TypesRepository],
  controllers: [TypesController],
  exports: [TypeOrmModule],
})
export class TypesModule {}
