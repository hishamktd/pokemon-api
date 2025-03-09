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

import { CardsDto } from './cards.dto';
import { Cards } from './cards.entity';
import { CardsService } from './cards.service';
import { Pagination } from '../common/pagination/pagination.decorator';
import { PaginationResDto } from '../common/pagination/pagination.dto';
import { PaginationParams } from '../common/pagination/pagination.interface';

@ApiTags('Cards')
@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  async findPaginated(
    @Pagination() params: PaginationParams,
  ): Promise<PaginationResDto<Cards>> {
    return await this.cardsService.findPaginated(params);
  }

  @Get('all')
  async findAll() {
    return await this.cardsService.findAll();
  }

  @Get('default')
  findDefault() {
    return this.cardsService.findDefault();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.cardsService.findOne(+id);
  }

  @Post()
  async create(@Body() card: CardsDto): Promise<Cards> {
    const instance = plainToInstance(CardsDto, card);
    const errors = await validate(instance);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    return await this.cardsService.create(card);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() card: CardsDto,
  ): Promise<Cards> {
    const instance = plainToInstance(CardsDto, card);
    const errors = await validate(instance);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    return await this.cardsService.update(+id, card);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.cardsService.delete(+id);
  }
}
