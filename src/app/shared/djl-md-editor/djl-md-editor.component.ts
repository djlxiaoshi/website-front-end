import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {FetchService} from '../../core/services/fetch.service';

const showdown = require('showdown');
const converter = new showdown.Converter();

const IS_SPLIT_SCREEN = 1;
const IS_FULL_PREVIEW = 2;
const IS_FULL_WRITING = 3;

@Component({
  selector: 'app-djl-md-editor',
  templateUrl: './djl-md-editor.component.html',
  styleUrls: ['./djl-md-editor.component.scss']
})
export class DjlMdEditorComponent implements OnInit {
  @ViewChild('previewArea') previewArea;

  @Input() hasToolsBar = true;
  @Input() hasTitleInput = true;
  @Input() rows = 7;

  private screenMode = 1;
  isSplitScreen = IS_SPLIT_SCREEN;
  isFullPreview = IS_FULL_PREVIEW;
  isFullWriting = IS_FULL_WRITING;

  constructor(
    private fetchService: FetchService
  ) { }
  content: string;
  htmlContent;

  isFullScreen = true;

  ngOnInit() {
  }

  inputChange(value) {
    if (this.isSplitScreen) {
      setTimeout(() => {
        const htmlOutput = converter.makeHtml(this.content);
        this.htmlContent = htmlOutput;
      }, 500);
    }
  }

  saveContent() {
    // 保存内容
  }

  post() {
    this.fetchService.get('user/login', {}, true).subscribe(data => {
      debugger;
    })
  }

  toggleScreen(status) {
    this.screenMode = status;
  }

}
