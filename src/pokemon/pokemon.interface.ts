export interface PokemonDefault {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  typeId: null;
  imageUrl: null;
  type: null;
}

export interface PokemonGetAllRes {
  id: number;
  name: string;
}
