import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Expansion } from './expansions.entity';
import { ExpansionsRepository } from './expansions.repository';
import { PageOptionsDto } from '../../common/dtos/page-opt-dtos';
import { PageMetaDto } from '../../common/page/page-meta.dto';
import { PageDto } from '../../common/page/page.dto';
import { ExpansionDefault } from './expansions.default';
import { FileUploadService } from '../../common/services/file-upload.service';

@Injectable()
export class ExpansionsService {
  constructor(
    private readonly expansionsRepository: ExpansionsRepository,
    private readonly fileUploadService: FileUploadService,
  ) {}

  async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<Expansion>> {
    const { skip, size } = pageOptionsDto as { skip: number; size: number };

    if (size < 1) {
      throw new BadRequestException('Size must be greater than 0');
    }

    if (size > 50) {
      throw new BadRequestException('Size must be less than 50');
    }

    const [entities, itemCount] = await this.expansionsRepository.findAndCount({
      skip,
      take: size,
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

  async findDefault(): Promise<ExpansionDefault> {
    return new ExpansionDefault();
  }

  async create(expansion: Expansion): Promise<Expansion> {
    const file = expansion.image;
    const imageUrl = await this.fileUploadService.uploadFile(file);
    expansion.imageUrl = imageUrl;
    return await this.expansionsRepository.save(expansion);
  }

  async update(id: number, expansion: Expansion): Promise<Expansion> {
    const existingExpansion = await this.findOne(id);
    const file = expansion.image;
    const imageUrl = await this.fileUploadService.uploadFile(file, {
      imageUrl: existingExpansion.imageUrl,
    });
    expansion.imageUrl = imageUrl;
    await this.expansionsRepository.update(id, expansion);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.expansionsRepository.delete(id);
  }
}
