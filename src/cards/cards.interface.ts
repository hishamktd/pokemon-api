import { CardType } from './cards.enum';

export interface DefaultCards {
  id: null;
  name: string;
  type: null;
  cardType: CardType;
  typeId: null;
  pokemonId: null;
  pokemon: null;
  expansionId: null;
  expansion: null;
  description: string;
  thumbnailUrl: string;
  createdAt: Date;
  updatedAt: Date;
  expansionPosition: number;
  isEx: boolean;
}

export interface CardGetAllRes {
  id: number;
  name: string;
}
