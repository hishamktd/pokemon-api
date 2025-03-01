import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { expansionsDefault } from './expansions.constants';
import { ExpansionDto } from './expansions.dto';
import { Expansion } from './expansions.entity';
import { ExpansionDefault, ExpansionsGetAllRes } from './expansions.interface';
import { ExpansionsRepository } from './expansions.repository';
import { PaginationResDto } from '../../common/pagination/pagination.dto';
import { PaginationParams } from '../../common/pagination/pagination.interface';

@Injectable()
export class ExpansionsService {
  constructor(private readonly expansionsRepo: ExpansionsRepository) {}

  async findAll(): Promise<ExpansionsGetAllRes[]> {
    return await this.expansionsRepo.findAll();
  }

  async findPaginated(
    pagination: PaginationParams,
  ): Promise<PaginationResDto<Expansion>> {
    return this.expansionsRepo.findPaginated(pagination);
  }

  async findOne(id: number): Promise<Expansion> {
    const expansion = await this.expansionsRepo.findOne({
      where: { id },
    });

    if (!expansion) {
      throw new NotFoundException('Expansion not found');
    }
    return expansion;
  }

  findDefault(): ExpansionDefault {
    return expansionsDefault;
  }

  async create(expansion: ExpansionDto): Promise<Expansion> {
    try {
      return await this.expansionsRepo.save(expansion);
    } catch (error) {
      throw new BadRequestException(`Failed to create expansion: ${error}`);
    }
  }

  async update(id: number, expansion: ExpansionDto): Promise<Expansion> {
    try {
      await this.expansionsRepo.update(id, expansion);
      return await this.findOne(id);
    } catch (error) {
      throw new BadRequestException(`Failed to update expansion: ${error}`);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.expansionsRepo.delete(id);
    } catch (error) {
      throw new BadRequestException(`Failed to delete expansion: ${error}`);
    }
  }
}
