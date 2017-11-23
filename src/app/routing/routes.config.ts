import {Routes, Route} from '@angular/router';

import {ComplexRoute} from './complex.routes';
import {HomeComponent} from '../home/home.component';

import {JavascriptComponent} from '../articles/javascript/javascript.component';
import {DjlMsgComponent} from '../djl-msg/djl-msg.component';


export const routes: ComplexRoute[] = [
  {
    path: 'home',
    crIcon: 'fa-home',
    crIsNav: true,
    crName: '首页',
    component: HomeComponent
  },
  {
    path: 'articles',
    crIcon: 'fa-book',
    crName: '我的文章',
    crDisableClick: true,
    crIsNav: true,
    children: [{
      path: 'javascript',
      crName: 'Javascript',
      crUrl: 'articles/javascript',
      crIcon: 'fa-refresh',
      crIsNav: true,
      component: JavascriptComponent
    },
    {
      path: 'css',
      crName: 'CSS',
      crIcon: 'fa-css3',
      crUrl: 'articles/css',
      crIsNav: true,
      component: JavascriptComponent
    },
    {
      path: 'vue',
      crName: 'Vue',
      crIcon: 'fa-vimeo',
      crUrl: 'articles/vue',
      crIsNav: true,
      component: JavascriptComponent
    },
    {
      path: 'angular',
      crName: 'Angular',
      crIcon: 'fa-amazon',
      crUrl: 'articles/angular',
      crIsNav: true,
      component: JavascriptComponent
    },
    {path: '**', redirectTo: 'javascript', pathMatch: 'full'}
  ]},
  {
    path: 'djlMsg',
    crIsNav: false,
    component: DjlMsgComponent
  },
  {
    path: 'aboutMe',
    crName: '关于本人',
    crIcon: 'fa-user',
    crIsNav: true,
    component: JavascriptComponent
  },
  {
    path: 'life',
    crName: '我的生活',
    crIcon: 'fa-coffee',
    crIsNav: true,
    component: JavascriptComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
