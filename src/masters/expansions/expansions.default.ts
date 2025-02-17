import { ExpansionDto } from './expansions.dto';

export class ExpansionDefault implements ExpansionDto {
  id = 0;
  createdAt = new Date();
  updatedAt = new Date();
  name = '';
  imageUrl = '';
  totalCards = 0;
  points = '';
}
