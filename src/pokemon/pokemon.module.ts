import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Pokemon } from './pokemon.entity';
import { TypesModule } from '../masters/types/types.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon]), TypesModule],
  exports: [TypeOrmModule],
})
export class PokemonModule {}
