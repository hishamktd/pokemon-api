import { BadRequestException, Injectable } from '@nestjs/common';

import { defaultCards } from './cards.constant';
import { CardsDto } from './cards.dto';
import { Cards } from './cards.entity';
import { CardGetAllRes, DefaultCards } from './cards.interface';
import { CardsRepository } from './cards.repository';
import { PaginationResDto } from '../common/pagination/pagination.dto';
import { PaginationParams } from '../common/pagination/pagination.interface';

@Injectable()
export class CardsService {
  constructor(private readonly cardsRepo: CardsRepository) {}

  async findAll(): Promise<CardGetAllRes[]> {
    try {
      return await this.cardsRepo.findAll();
    } catch (error) {
      throw new BadRequestException(`Failed to fetch cards: ${error}`);
    }
  }

  async findPaginated(
    params: PaginationParams,
  ): Promise<PaginationResDto<Cards>> {
    try {
      return await this.cardsRepo.findPaginated(params);
    } catch (error) {
      throw new BadRequestException(`Failed to fetch cards: ${error}`);
    }
  }

  async findOne(id: number): Promise<Cards> {
    try {
      const card = await this.cardsRepo.findOne({ where: { id } });

      if (!card) {
        throw new BadRequestException('Card not found');
      }
      return card;
    } catch (error) {
      throw new BadRequestException(`Failed to fetch card: ${error}`);
    }
  }

  findDefault(): DefaultCards {
    return defaultCards;
  }

  async create(card: CardsDto): Promise<Cards> {
    try {
      return await this.cardsRepo.save(card);
    } catch (error) {
      throw new BadRequestException(`Failed to create card: ${error}`);
    }
  }

  async update(id: number, card: CardsDto): Promise<Cards> {
    try {
      await this.cardsRepo.update(id, card);
      return await this.findOne(id);
    } catch (error) {
      throw new BadRequestException(`Failed to update card: ${error}`);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.cardsRepo.delete(id);
    } catch (error) {
      throw new BadRequestException(`Failed to delete card: ${error}`);
    }
  }
}
