import { v4 as uuid } from 'uuid';
import { CarInterface } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: CarInterface[] = [
  {
    id: uuid(),
    brand: 'Audi',
    model: 'A4',
  },
  {
    id: uuid(),
    brand: 'Renault',
    model: 'R4',
  },
  {
    id: uuid(),
    brand: 'Mazda',
    model: 'RX5',
  },
];
