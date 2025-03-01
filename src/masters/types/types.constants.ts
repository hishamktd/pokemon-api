import { TypesDefault } from './types.interface';

export const allowedSortFields = [
  'id',
  'name',
  'color',
  'updatedAt',
  'createdAt',
];

export const typesDefault: TypesDefault = {
  id: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  name: '',
  iconUrl: '',
  color: '',
};
