import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TypesDto } from './types.dto';
import { TypesEntity } from './types.entity';
import { TypesService } from './types.service';
import { Pagination } from '../../common/pagination/pagination.decorator';
import { PaginationResDto } from '../../common/pagination/pagination.dto';
import { PaginationParams } from '../../common/pagination/pagination.interface';

@ApiTags('Master Data - Types')
@Controller('masters/types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Get()
  async findPaginated(
    @Pagination() pagination: PaginationParams,
  ): Promise<PaginationResDto<TypesEntity>> {
    return this.typesService.findPaginated(pagination);
  }

  @Get('default')
  findDefault(): TypesEntity {
    return this.typesService.findDefault();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TypesEntity> {
    return this.typesService.findOne(id);
  }

  @Post()
  async create(@Body() type: TypesDto): Promise<TypesEntity> {
    const instance = plainToInstance(TypesDto, type);
    const errors = await validate(instance);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    return this.typesService.create(type);
  }

  @Post(':id')
  async update(@Param('id') id: number, @Body() type: TypesDto) {
    const instance = plainToInstance(TypesDto, type);
    const errors = await validate(instance);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    return this.typesService.update(id, type);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.typesService.delete(id);
  }
}
