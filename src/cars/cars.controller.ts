import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = ['Audi', 'BMW', 'Lada'];

  @Get()
  getAllCars(): Array<string> {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id: string): string {
    console.log('this.cars[+id]', this.cars[+id]);
    const car = this.cars[+id];
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return car;
  }
}
