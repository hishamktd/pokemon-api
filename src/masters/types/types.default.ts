import { TypesDto } from './types.dto';

export class TypesDefault implements TypesDto {
  id = 0;
  createdAt = new Date();
  updatedAt = new Date();
  name = '';
  iconUrl = '';
  color: '';
}
