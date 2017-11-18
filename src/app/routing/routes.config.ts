import {Routes, Route} from '@angular/router';

import {ComplexRoute} from './complex.routes';
import {HomeComponent} from '../home/home.component';


export const routes: ComplexRoute[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    crIcon: '',
    crName: '',
    component: HomeComponent
  }
];
