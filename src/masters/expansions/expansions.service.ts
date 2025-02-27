import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { ExpansionDefault } from './expansions.default';
import { ExpansionDto } from './expansions.dto';
import { Expansion } from './expansions.entity';
import { ExpansionsRepository } from './expansions.repository';
import { PaginationResDto } from '../../common/pagination/pagination.dto';
import { PaginationParams } from '../../common/pagination/pagination.interface';

@Injectable()
export class ExpansionsService {
  constructor(private readonly expansionsRepo: ExpansionsRepository) {}

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
    return new ExpansionDefault();
  }

  async create(expansion: ExpansionDto): Promise<Expansion> {
    try {
      return await this.expansionsRepo.save(expansion);
    } catch (error) {
      throw new BadRequestException(`Failed to create expansion: ${error}`);
    }
  }

  async update(id: number, expansion: ExpansionDto): Promise<Expansion> {
    await this.expansionsRepo.update(id, expansion);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.expansionsRepo.delete(id);
  }
}
