import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from './entities/brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    //{ id: uuid(), name: 'Audi', createdAt: Date.now() },
  ];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createdAt: Date.now(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const itemWithId = this.brands.find((item) => item.id === id);
    if (!itemWithId) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return itemWithId;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandWithId = this.findOne(id);

    this.brands = this.brands.map((item) => {
      if (item.id === id) {
        brandWithId = {
          ...brandWithId,
          ...updateBrandDto,
          id,
          updatedAt: Date.now(),
        };
        return brandWithId;
      }
      return item;
    });
    return brandWithId;
  }

  remove(id: string) {
    this.brands = this.brands.filter((item) => item.id !== id);
    return 'Item deleted';
  }

  fillBrandsFromSeed(brands: Brand[]) {
    this.brands = brands;
  }
}
