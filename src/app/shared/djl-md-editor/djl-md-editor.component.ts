import { Component, OnInit, ViewChild, Input } from '@angular/core';
const showdown = require('showdown');
const converter = new showdown.Converter();

@Component({
  selector: 'app-djl-md-editor',
  templateUrl: './djl-md-editor.component.html',
  styleUrls: ['./djl-md-editor.component.scss']
})
export class DjlMdEditorComponent implements OnInit {
  @ViewChild('previewArea') previewArea;

  @Input() hasPreview = true;
  @Input() hasToolsBar = true;
  @Input() hasTitleInput = true;

  constructor() { }
  content: string;
  htmlContent;

  isFullScreen = true;

  ngOnInit() {
  }

  inputChange(value) {
    if (!this.isFullScreen) {
      setTimeout(() => {
        const htmlOutput = converter.makeHtml(this.content);
        this.htmlContent = htmlOutput;
      }, 500);
    }
  }

  saveContent() {
    // 保存内容
  }

  toggleScreen() {
    this.isFullScreen = !this.isFullScreen;
  }

}
