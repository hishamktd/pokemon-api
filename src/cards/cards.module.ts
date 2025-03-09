import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CardsController } from './cards.controller';
import { Cards } from './cards.entity';
import { CardsRepository } from './cards.repository';
import { CardsService } from './cards.service';
import { Expansion } from '../masters/expansions/expansions.entity';
import { TypesModule } from '../masters/types/types.module';
import { PokemonModule } from '../pokemon/pokemon.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cards]),
    TypesModule,
    PokemonModule,
    Expansion,
  ],
  controllers: [CardsController],
  providers: [CardsRepository, CardsService],
})
export class CardsModule {}
