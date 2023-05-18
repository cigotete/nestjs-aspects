import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Renault',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Audi',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Nissan',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Mazda',
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Ford',
    createdAt: Date.now(),
  },
];
