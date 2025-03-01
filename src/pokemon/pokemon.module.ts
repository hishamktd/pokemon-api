import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PokemonController } from './pokemon.controller';
import { Pokemon } from './pokemon.entity';
import { PokemonRepository } from './pokemon.repository';
import { PokemonService } from './pokemon.service';
import { TypesModule } from '../masters/types/types.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon]), TypesModule],
  providers: [PokemonRepository, PokemonService],
  exports: [TypeOrmModule],
  controllers: [PokemonController],
})
export class PokemonModule {}
