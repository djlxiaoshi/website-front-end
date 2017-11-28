import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-djl-editor',
  templateUrl: './djl-editor.component.html',
  styleUrls: ['./djl-editor.component.scss']
})
export class DjlEditorComponent implements OnInit {
  @Input() toolbarOptions;

  constructor() { }

  ngOnInit() {
    const toolbarOptions = {
      handlers: {
        // handlers object will be merged with default handlers object
        'link': function(value) {
          if (value) {
            var href = prompt('Enter the URL');
            this.quill.format('link', href);
          } else {
            this.quill.format('link', false);
          }
        }
      }
    }
    
    const quill = new Quill('#editor', {
      modules: {
        toolbar: toolbarOptions
      }
    });

    quill.keyboard.addBinding({
      key: 'tab',
    }, function(range, context) {
      this.quill.formatText(range, 'indent', true);
    });
  }

}
