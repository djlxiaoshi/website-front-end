import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import Tooltips from '../shared/utils/izitoast.util';
import { FetchService } from '../core/services/fetch.service';
const swal = require('sweetalert');


@Component({
  selector: 'app-djl-msg',
  templateUrl: './djl-msg.component.html',
  styleUrls: ['./djl-msg.component.scss'],
  animations: [
    trigger('msgVisible', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class DjlMsgComponent implements OnInit {
  @Input() msgVisible = false;
  @ViewChild('avatar') avatar;

  @Output() msgVisibleChange = new EventEmitter<any>();

  private nickname = 'DJL箫氏';
  private ename = 'Lyon';
  private password = '123';

  msgs;

  uploadedFiles = [];

  constructor(
    private fetchService: FetchService
  ) { }

  ngOnInit() {
  }

  changeAvatar() {

  }
  fileSelect(event) {
  }

  uploadFailed(msg) {
    Tooltips('error', msg, 'warning');
  }

  uploadSuccess(event) {

  }

  logOut() {
    swal({
      title: '确定要退出登录吗？',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      this.fetchService.get('v1/users/logout', {}, true).subscribe(data => {

      });
    });
  }

  save() {}

  closeMsgDialog() {
    this.msgVisibleChange.emit(false);
  }

}
