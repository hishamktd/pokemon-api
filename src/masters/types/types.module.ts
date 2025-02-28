import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypesEntity } from './types.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypesEntity])],
})
export class TypesModule {}
