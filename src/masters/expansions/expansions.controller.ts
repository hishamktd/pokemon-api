import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ExpansionDefault } from './expansions.default';
import { ExpansionDto } from './expansions.dto';
import { Expansion } from './expansions.entity';
import { ExpansionsService } from './expansions.service';
import { Pagination } from '../../common/pagination/pagination.decorator';
import { PaginationResDto } from '../../common/pagination/pagination.dto';
import { PaginationParams } from '../../common/pagination/pagination.interface';

@ApiTags('Master Data - Expansions')
@Controller('masters/expansions')
export class ExpansionsController {
  constructor(private readonly expansionsService: ExpansionsService) {}

  @Get()
  async findPaginated(
    @Pagination() pagination: PaginationParams,
  ): Promise<PaginationResDto<Expansion>> {
    return this.expansionsService.findPaginated(pagination);
  }

  @Get('default')
  findDefault(): ExpansionDefault {
    return this.expansionsService.findDefault();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Expansion> {
    return this.expansionsService.findOne(+id);
  }

  @Post()
  async create(@Body() expansionDto: ExpansionDto): Promise<Expansion> {
    const instance = plainToInstance(ExpansionDto, expansionDto);
    const errors = await validate(instance);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    return this.expansionsService.create(expansionDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() expansion: Expansion) {
    return this.expansionsService.update(id, expansion);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.expansionsService.delete(+id);
  }
}
