import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService, CarInterface } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars(): Array<CarInterface> {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number): CarInterface {
    const car = this.carsService.findOneById(id);
    return car;
  }
}
