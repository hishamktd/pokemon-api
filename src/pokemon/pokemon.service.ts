import { Injectable, NotFoundException } from '@nestjs/common';

import { pokemonDefault } from './pokemon.constants';
import { PokemonDto } from './pokemon.dto';
import { Pokemon } from './pokemon.entity';
import {
  GetAllParams,
  PokemonDefault,
  PokemonGetAllRes,
  PokemonGetAllWithTypeRes,
  PokemonParams,
} from './pokemon.interface';
import { PokemonRepository } from './pokemon.repository';
import { PaginationResDto } from '../common/pagination/pagination.dto';

@Injectable()
export class PokemonService {
  constructor(private readonly pokemonRepo: PokemonRepository) {}

  async findAll(params: GetAllParams): Promise<PokemonGetAllRes[]> {
    try {
      return await this.pokemonRepo.findAll(params);
    } catch (error) {
      throw new Error(`Failed to find all Pokemon ${error}`);
    }
  }

  async findAllWithTypes(): Promise<PokemonGetAllWithTypeRes[]> {
    try {
      return await this.pokemonRepo.findAllWithTypes();
    } catch (error) {
      throw new Error(`Failed to find all Pokemon with types ${error}`);
    }
  }

  async findPaginated(
    params: PokemonParams,
  ): Promise<PaginationResDto<Pokemon>> {
    try {
      return await this.pokemonRepo.findPaginated(params);
    } catch (error) {
      throw new Error(`Failed to find paginated Pokemon ${error}`);
    }
  }

  findDefault(): PokemonDefault {
    return pokemonDefault;
  }

  async findOne(id: number): Promise<Pokemon> {
    try {
      const pokemon = await this.pokemonRepo.findOne({
        where: { id },
        relations: ['type', 'evolvedFrom', 'evolvedFrom.type'],
      });

      if (!pokemon) {
        throw new NotFoundException('Pokemon not found');
      }
      return pokemon;
    } catch (error) {
      throw new Error(`Failed to find Pokemon ${error}`);
    }
  }

  async create(pokemonDto: PokemonDto): Promise<Pokemon> {
    try {
      return await this.pokemonRepo.save(pokemonDto);
    } catch (error) {
      throw new Error(`Failed to create Pokemon ${error}`);
    }
  }

  async update(id: number, pokemonDto: PokemonDto): Promise<Pokemon> {
    try {
      await this.pokemonRepo.update(id, pokemonDto);
      return await this.findOne(id);
    } catch (error) {
      throw new Error(`Failed to update Pokemon ${error}`);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.pokemonRepo.delete(id);
    } catch (error) {
      throw new Error(`Failed to delete Pokemon ${error}`);
    }
  }
}
