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
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TypesDto } from './types.dto';
import { Types } from './types.entity';
import { TypesDefault, TypesGetAllRes } from './types.interface';
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
  ): Promise<PaginationResDto<Types>> {
    return this.typesService.findPaginated(pagination);
  }

  @Get('all')
  async findAll(): Promise<TypesGetAllRes[]> {
    return this.typesService.findAll();
  }

  @Get('default')
  findDefault(): TypesDefault {
    return this.typesService.findDefault();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Types> {
    return this.typesService.findOne(id);
  }

  @Post()
  async create(@Body() type: TypesDto): Promise<Types> {
    const instance = plainToInstance(TypesDto, type);
    const errors = await validate(instance);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    return this.typesService.create(type);
  }

  @Put(':id')
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
