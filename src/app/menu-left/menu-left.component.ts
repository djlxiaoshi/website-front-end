import { Component, OnInit, transition } from '@angular/core';
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
  private userMsgVisible = false;

  ngOnInit() {
    this.items = [{
        label: '首页',
        icon: 'fa-home',
        routerLink: 'home'
    },
    {
      label: '我的文章',
      icon: 'fa-book',
      style: {},
      items: [
        {label: 'Javascript', icon: 'fa-refresh', routerLink: 'articles/javascript'},
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

  showMsgDialog() {
    this.userMsgVisible = true;
  }

  onMsgVisibleChange(status) {
    this.userMsgVisible = status;
  }
}
