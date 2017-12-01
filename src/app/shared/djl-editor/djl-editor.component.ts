import { Component, OnInit, Input } from '@angular/core';

const showdown = require('showdown');
const converter = new showdown.Converter();

@Component({
  selector: 'app-djl-editor',
  templateUrl: './djl-editor.component.html',
  styleUrls: ['./djl-editor.component.scss']
})
export class DjlEditorComponent implements OnInit {
  @Input() toolbarOptions;
  @Input() editorType = '';

  constructor() { }

  ngOnInit() {
    const quill = new Quill('#editor', {
      theme: 'bubble',
      modules: {
        
      }
      
    });

    quill.on('text-change', function(delta, oldDelta, source) {
      const text = quill.getText();
      const htmlOutput = converter.makeHtml(text);
      document.getElementById('preview').innerHTML = htmlOutput;
    });

    quill.keyboard.addBinding({
      key: 'tab',
    }, function(range, context) {
      this.quill.formatText(range, 'indent', true);
    });
  }

}
