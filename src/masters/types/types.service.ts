import { Injectable } from '@nestjs/common';

import { TypesEntity } from './types.entity';
import { TypesRepository } from './types.repository';
import { PaginationResDto } from '../../common/pagination/pagination.dto';
import { PaginationParams } from '../../common/pagination/pagination.interface';

@Injectable()
export class TypesService {
  constructor(private readonly typesRepo: TypesRepository) {}

  async findPaginated(
    pagination: PaginationParams,
  ): Promise<PaginationResDto<TypesEntity>> {
    return this.typesRepo.findPaginated(pagination);
  }
}
