import { Component, OnInit, ViewChild } from '@angular/core';
const showdown = require('showdown');
const converter = new showdown.Converter();

@Component({
  selector: 'app-djl-md-editor',
  templateUrl: './djl-md-editor.component.html',
  styleUrls: ['./djl-md-editor.component.scss']
})
export class DjlMdEditorComponent implements OnInit {
  @ViewChild('previewArea') previewArea;

  constructor() { }
  content: string;
  htmlContent;

  isFullScreen = false;

  ngOnInit() {
  }

  inputChange(value) {
    if (!this.isFullScreen) {
      const htmlOutput = converter.makeHtml(this.content);
      this.htmlContent = htmlOutput;
    }
  }

  fullScreen() {

  }

  toggleScreen() {
    this.isFullScreen = !this.isFullScreen;
  }

}
