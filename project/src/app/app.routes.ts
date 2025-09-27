import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page';
import { CarComponent } from './pages/car/car.component';
import { DragonballComponent } from './pages/dragonball/dragonball';
import { DragonballSuperComponent } from './pages/dragonball-super/dragonball-super';

export const routes: Routes = [
  {
    path: '',
    component: CounterPage,
  },
  {
    path: 'car',
    component: CarComponent,
  },
  {
    path: 'dragonball',
    component: DragonballComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
