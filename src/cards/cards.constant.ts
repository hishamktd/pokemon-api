import { CardType } from './cards.enum';
import { DefaultCards } from './cards.interface';

export const allowedSortFields = ['id', 'name', 'updatedAt', 'createdAt'];

export const defaultCards: DefaultCards = {
  id: null,
  name: '',
  type: null,
  cardType: CardType.POKEMON,
  typeId: null,
  pokemonId: null,
  pokemon: null,
  description: '',
  thumbnailUrl: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};
