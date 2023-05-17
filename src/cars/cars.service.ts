import { Injectable, NotFoundException } from '@nestjs/common';
import { CarInterface } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

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

  update(id: string, body: UpdateCarDto): CarInterface {
    let carWithId = this.findOneById(id);

    if (body.id && body.id !== id) {
      throw new NotFoundException(
        `Param ID (${id}) and body ID (${body.id}) do not match`,
      );
    }

    this.cars = this.cars.map((item) => {
      if (item.id === id) {
        carWithId = {
          ...carWithId,
          ...body,
          id,
        };
        return carWithId;
      }
      return item;
    });
    return carWithId;
  }

  delete(id: string) {
    const carWithId = this.findOneById(id);
    this.cars = this.cars.filter((item) => item.id !== id);
    return "Item deleted";
  }
}
