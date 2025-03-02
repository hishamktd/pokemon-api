import { Stage } from './pokemon.enum';

export interface PokemonDefault {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  typeId: null;
  imageUrl: null;
  type: null;
  stage: Stage;
  evolvedFromId: null;
  evolvedFrom: null;
}

export interface PokemonGetAllRes {
  id: number;
  name: string;
}
