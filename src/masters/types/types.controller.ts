import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

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
}
