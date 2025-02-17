import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

import { ExpansionDefault } from './expansions.default';
import { Expansion } from './expansions.entity';
import { ExpansionsService } from './expansions.service';
import { PageOptionsDto } from '../../common/dtos/page-opt-dtos';
import { PageDto } from '../../common/page/page.dto';
import { MulterFile } from '../../types';
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

  @Get('default')
  findDefault(): ExpansionDefault {
    return this.expansionsService.findDefault();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Expansion> {
    return this.expansionsService.findOne(+id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() expansion: Expansion, @UploadedFile() file: MulterFile) {
    return this.expansionsService.create(expansion, file);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id') id: number,
    @Body() expansion: Expansion,
    @UploadedFile() file: MulterFile,
  ) {
    return this.expansionsService.update(id, expansion, file);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.expansionsService.delete(+id);
  }
}
