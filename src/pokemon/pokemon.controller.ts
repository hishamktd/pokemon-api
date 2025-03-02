import { plainToInstance } from 'class-transformer';
import { validate, validateSync } from 'class-validator';

import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GetAllParamsDto, PokemonDto, PokemonParamsDto } from './pokemon.dto';
import { Pokemon } from './pokemon.entity';
import {
  GetAllParams,
  PokemonDefault,
  PokemonGetAllRes,
  PokemonParams,
} from './pokemon.interface';
import { PokemonService } from './pokemon.service';
import { Pagination } from '../common/pagination/pagination.decorator';
import { PaginationResDto } from '../common/pagination/pagination.dto';

@ApiTags('Pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async findPaginated(
    @Pagination(PokemonParamsDto) params: PokemonParams,
  ): Promise<PaginationResDto<Pokemon>> {
    return this.pokemonService.findPaginated(params);
  }

  @Get('all')
  async findAll(@Query() params: GetAllParams): Promise<PokemonGetAllRes[]> {
    const getAllParams = plainToInstance(GetAllParamsDto, params, {
      enableImplicitConversion: true,
    });

    const errors = validateSync(getAllParams);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    return this.pokemonService.findAll(params);
  }

  @Get('default')
  findDefault(): PokemonDefault {
    return this.pokemonService.findDefault();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Pokemon> {
    return this.pokemonService.findOne(id);
  }

  @Post()
  async create(@Body() pokemonDto: PokemonDto): Promise<Pokemon> {
    const instance = plainToInstance(PokemonDto, pokemonDto);
    const errors = await validate(instance);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    return this.pokemonService.create(pokemonDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() pokemonDto: PokemonDto) {
    const instance = plainToInstance(PokemonDto, pokemonDto);
    const errors = await validate(instance);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    return this.pokemonService.update(id, pokemonDto);
  }

  @Post(':id')
  async delete(@Param('id') id: number) {
    return this.pokemonService.delete(id);
  }
}
