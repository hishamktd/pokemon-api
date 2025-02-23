import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PageOptions } from 'src/common/interfaces/page-opt.interface';

import { ExpansionDefault } from './expansions.default';
import { Expansion } from './expansions.entity';
import { ExpansionsRepository } from './expansions.entity';
import { PageOptionsDto } from '../../common/dtos/page-opt.dtos';
import { PageMetaDto } from '../../common/page/page-meta.dto';
import { PageDto } from '../../common/page/page.dto';

@Injectable()
export class ExpansionsService {
  constructor(private readonly expansionsRepository: ExpansionsRepository) {}

  async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<Expansion>> {
    const { skip, size, order } = pageOptionsDto as PageOptions;

    if (size < 1) {
      throw new BadRequestException('Size must be greater than 0');
    }

    if (size > 50) {
      throw new BadRequestException('Size must be less than 50');
    }

    const [entities, itemCount] = await this.expansionsRepository.findAndCount({
      skip,
      take: size,
      order: {
        updatedAt: order,
      },
    });

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }

  async findOne(id: number): Promise<Expansion> {
    const expansion = await this.expansionsRepository.findOne({
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

  async create(expansion: Expansion): Promise<Expansion> {
    return await this.expansionsRepository.save(expansion);
  }

  async update(id: number, expansion: Expansion): Promise<Expansion> {
    await this.expansionsRepository.update(id, expansion);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.expansionsRepository.delete(id);
  }
}
