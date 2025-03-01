import { Injectable } from '@nestjs/common';

import { PokemonRepository } from './pokemon.repository';

@Injectable()
export class PokemonService {
  constructor(private readonly pokemonRepo: PokemonRepository) {}
}
