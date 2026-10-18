import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'mascotas',
    name: 'Mascotas',
    icon: 'Dog',
    description: 'Alimento super premium, antiparasitarios y accesorios para perros y gatos.',
    productCount: 42,
  },
  {
    id: 'agro',
    name: 'Agro',
    icon: 'Wheat',
    description: 'Productos veterinarios para ganado bovino, ovinos y cerdos.',
    productCount: 38,
  },
  {
    id: 'equinos',
    name: 'Equinos',
    icon: 'PawPrint',
    description: 'Suplementos, raciones de alto rendimiento y cuidado para caballos.',
    productCount: 24,
  },
  {
    id: 'jardineria',
    name: 'Jardinería',
    icon: 'Flower2',
    description: 'Semillas, fertilizantes organominerales y cuidado verde.',
    productCount: 19,
  },
  {
    id: 'herramientas',
    name: 'Herramientas',
    icon: 'Wrench',
    description: 'Equipamiento rural, cercos eléctricos, tijeras y herramientas.',
    productCount: 31,
  },
  {
    id: 'farmacia',
    name: 'Farmacia',
    icon: 'Stethoscope',
    description: 'Medicamentos veterinarios, vacunas y antibióticos autorizados.',
    productCount: 29,
  },
];
