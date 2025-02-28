import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { TypesDefault } from './types.default';
import { TypesDto } from './types.dto';
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

  async findOne(id: number): Promise<TypesEntity> {
    const type = await this.typesRepo.findOne({ where: { id } });

    if (!type) {
      throw new NotFoundException('Type not found');
    }
    return type;
  }

  findDefault(): TypesEntity {
    return new TypesDefault();
  }

  async create(type: TypesDto): Promise<TypesEntity> {
    try {
      return await this.typesRepo.save(type);
    } catch (error) {
      throw new BadRequestException(`Failed to create expansion: ${error}`);
    }
  }

  async update(id: number, type: TypesDto): Promise<TypesEntity> {
    try {
      await this.typesRepo.update(id, type);
      return this.findOne(id);
    } catch (error) {
      throw new BadRequestException(`Failed to update expansion: ${error}`);
    }
  }

  async delete(id: number): Promise<void> {
    await this.typesRepo.delete(id);
  }
}
