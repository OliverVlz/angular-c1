import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page';
import { CarComponent } from './pages/car/car.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPage,
  },
  {
    path: 'car',
    component: CarComponent,
  }
];
