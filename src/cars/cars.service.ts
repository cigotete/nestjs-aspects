import { Injectable, NotFoundException } from '@nestjs/common';

export interface CarInterface {
  id: number;
  brand: string;
  model: string;
}

@Injectable()
export class CarsService implements CarInterface {
  id: number;
  brand: string;
  model: string;

  private cars: CarInterface[] = [
    { id: 1, brand: 'Audi', model: 'A4' },
    { id: 2, brand: 'BMW', model: 'X5' },
    { id: 3, brand: 'Lada', model: 'Vesta' },
  ];

  findAll(): Array<CarInterface> {
    console.log('this.cars from service', this.cars);
    return this.cars;
  }

  findOneById(id: number): CarInterface {
    const itemWithId = this.cars.find((item) => item.id === +id);
    console.log('car with ID ' + id, itemWithId);
    if (!itemWithId) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return itemWithId;
  }
}
