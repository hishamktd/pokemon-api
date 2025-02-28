import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypesController } from './types.controller';
import { TypesEntity } from './types.entity';
import { TypesRepository } from './types.repository';
import { TypesService } from './types.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypesEntity])],
  providers: [TypesService, TypesRepository],
  controllers: [TypesController],
})
export class TypesModule {}
