import { Injectable, NotFoundException } from '@nestjs/common';
import { CarInterface } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dtos/create-car.dto';

@Injectable()
export class CarsService implements CarInterface {
  id: string;
  brand: string;
  model: string;

  private cars: CarInterface[] = [
    { id: uuid(), brand: 'Audi', model: 'A4' },
    { id: uuid(), brand: 'BMW', model: 'X5' },
    { id: uuid(), brand: 'Lada', model: 'Vesta' },
  ];

  findAll(): Array<CarInterface> {
    console.log('this.cars from service', this.cars);
    return this.cars;
  }

  findOneById(id: string): CarInterface {
    const itemWithId = this.cars.find((item) => item.id === id);
    console.log('car with ID ' + id, itemWithId);
    if (!itemWithId) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return itemWithId;
  }

  create( createCarDto: CreateCarDto ) {
    console.log('createCarDto', createCarDto);
    const newCar: CarInterface = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, body: CarInterface): CarInterface {
    const itemWithId = this.cars.find((item) => item.id === id);
    if (!itemWithId) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    const itemIndex = this.cars.findIndex((item) => item.id === id);
    this.cars[itemIndex] = body;
    return this.cars[itemIndex];
  }
}
