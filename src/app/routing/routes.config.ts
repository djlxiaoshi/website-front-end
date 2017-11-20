import {Routes, Route} from '@angular/router';

import {ComplexRoute} from './complex.routes';
import {HomeComponent} from '../home/home.component';

import {JavascriptComponent} from '../articles/javascript/javascript.component';


export const routes: ComplexRoute[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    crIcon: '',
    crName: '',
    component: HomeComponent
  },
  {
    path: 'articles',
    crIcon: '',
    crName: '',
    children: [{
      path: 'javascript',
      component: JavascriptComponent
    },
    {path: '', redirectTo: '/javascript', pathMatch: 'full'}
  ]
  }
];
