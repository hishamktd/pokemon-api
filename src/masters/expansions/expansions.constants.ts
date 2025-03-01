import { ExpansionDefault } from './expansions.interface';

export const allowedSortFields = [
  'id',
  'name',
  'totalCards',
  'points',
  'updatedAt',
  'createdAt',
];

export const expansionsDefault: ExpansionDefault = {
  id: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  name: '',
  imageUrl: '',
  totalCards: 0,
  points: '',
};
