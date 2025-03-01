export interface ExpansionDefault {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  imageUrl: string;
  totalCards: number;
  points: string;
}

export interface ExpansionsGetAllRes {
  id: number;
  name: string;
}
