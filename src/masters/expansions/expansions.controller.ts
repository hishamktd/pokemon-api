import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Expansion } from './expansions.entity';
import { ExpansionsService } from './expansions.service';
import { PageOptionsDto } from '../../common/dtos/page-opt-dtos';
import { PageDto } from '../../common/page/page.dto';
import { ExpansionDefault } from './expansions.default';
@ApiTags('Master Data - Expansions')
@Controller('masters/expansions')
export class ExpansionsController {
  constructor(private readonly expansionsService: ExpansionsService) {}

  @Get()
  async findAll(
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<Expansion>> {
    return this.expansionsService.findAll(pageOptionsDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Expansion> {
    return this.expansionsService.findOne(+id);
  }

  @Get('default')
  async findDefault(): Promise<ExpansionDefault> {
    return this.expansionsService.findDefault();
  }

  @Post()
  async create(@Body() expansion: Expansion): Promise<Expansion> {
    return this.expansionsService.create(expansion);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() expansion: Expansion,
  ): Promise<Expansion> {
    return this.expansionsService.update(+id, expansion);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.expansionsService.delete(+id);
  }
}
