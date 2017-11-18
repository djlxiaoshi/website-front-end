import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

import {routes} from '../routing/routes.config';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit {

  menus;
  constructor() { }

  private items: MenuItem[];

  ngOnInit() {
    this.items = [{
        label: '首页',
        icon: 'fa-home'
    },
    {
      label: '我的文章',
      items: [
        {label: 'Javascript', icon: 'fa-refresh'},
        {label: 'CSS', icon: 'fa-css3'},
        {label: 'Vue', icon: 'fa-vimeo'},
        {label: 'Angular', icon: 'fa-amazon'}
      ]
    },
    {
      label: '关于本人',
      icon: 'fa-user'
    },
    {
      label: '我的生活',
      icon: 'fa-coffee'
    }];
  }

  buildMenu(routesConfig) {
    let menu;
   
    function buildMenu(_routesConfig) {
      menu = _routesConfig.map(route => {
        const _route = {};
        if (route.crName) {
          _route['label'] = route.crName;
        }
        if (route.crIcon) {
          _route['label'] = route.icon;
        }
        if (route.path) {
          _route['routerLink'] = [route.path]
        }
        if (route.children && route.children.length) {
          _route['items'] = buildMenu(route.children);
        }
        return _route;
      });
    }
  }
}
