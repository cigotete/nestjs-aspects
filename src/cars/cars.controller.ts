import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarInterface } from './interfaces/car.interface';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Controller('cars')
//@UsePipes(ValidationPipe) //Example of controller-scoped pipe
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars(): Array<CarInterface> {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string): CarInterface {
    const car = this.carsService.findOneById(id);
    return car;
  }

  @Post()
  /*@UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )*/ // Example of action-scoped pipe
  createCar(@Body() createCarDto: CreateCarDto) {
    const car = this.carsService.create(createCarDto);
    return car;
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    const car = this.carsService.update(id, updateCarDto);
    return car;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    const car = this.carsService.delete(id);
    return car;
  }
}
