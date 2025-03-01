import { PokemonDefault } from './pokemon.interface';

export const allowedSortFields = [
  'id',
  'name',
  'updatedAt',
  'createdAt',
  'typeName',
];

export const pokemonDefault: PokemonDefault = {
  id: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  name: '',
  typeId: null,
  imageUrl: null,
  type: null,
};
