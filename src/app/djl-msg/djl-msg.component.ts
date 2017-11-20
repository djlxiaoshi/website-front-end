import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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

  @Output() msgVisibleChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  closeMsgDialog() {
    this.msgVisibleChange.emit(false);
  }

}
