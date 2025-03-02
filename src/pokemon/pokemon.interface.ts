import { Stage } from './pokemon.enum';
import { PaginationParams } from '../common/pagination/pagination.interface';

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

export interface PokemonParams extends PaginationParams {
  stage?: Stage;
}

export interface GetAllParams {
  stage?: string;
}
