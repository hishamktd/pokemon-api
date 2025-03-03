import { Gender, Stage } from './pokemon.enum';
import { PokemonDefault } from './pokemon.interface';

export const allowedSortFields = ['id', 'name', 'updatedAt', 'createdAt'];

export const pokemonDefault: PokemonDefault = {
  id: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  name: '',
  typeId: null,
  imageUrl: null,
  type: null,
  stage: Stage.BASIC,
  evolvedFromId: null,
  evolvedFrom: null,
  gender: Gender.UNKNOWN,
};
