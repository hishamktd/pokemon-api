import { Gender, Stage } from './pokemon.enum';
import { PaginationParams } from '../common/pagination/pagination.interface';
import { TypesDefault } from '../masters/types/types.interface';

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
  gender: Gender;
  isFossil: boolean;
}

export interface PokemonGetAllRes {
  id: number;
  name: string;
}

export interface PokemonGetAllWithTypeRes extends PokemonGetAllRes {
  type: TypesDefault;
  isFossil: boolean;
}

export interface PokemonParams extends PaginationParams {
  stage?: Stage;
}

export interface GetAllParams {
  stage?: string;
}
