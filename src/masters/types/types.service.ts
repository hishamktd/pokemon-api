import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { typesDefault } from './types.constants';
import { TypesDto } from './types.dto';
import { TypesEntity } from './types.entity';
import { TypesGetAllRes } from './types.interface';
import { TypesRepository } from './types.repository';
import { PaginationResDto } from '../../common/pagination/pagination.dto';
import { PaginationParams } from '../../common/pagination/pagination.interface';

@Injectable()
export class TypesService {
  constructor(private readonly typesRepo: TypesRepository) {}

  async findAll(): Promise<TypesGetAllRes[]> {
    return this.typesRepo.findAll();
  }

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
    return typesDefault;
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
    try {
      await this.typesRepo.delete(id);
    } catch (error) {
      throw new BadRequestException(`Failed to delete type: ${error}`);
    }
  }
}
