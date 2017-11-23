import { Component, OnInit, transition } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

import {routes} from '../routing/routes.config';
import MenuList from './build.menu';

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
    this.items = MenuList;
  }

  showMsgDialog() {
    this.userMsgVisible = true;
  }

  onMsgVisibleChange(status) {
    this.userMsgVisible = status;
  }
}
