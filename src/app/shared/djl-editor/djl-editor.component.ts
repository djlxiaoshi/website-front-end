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
    const quill = new Quill('#editor', {
      theme: 'snow',
      modules: {

      }
    });

    quill.keyboard.addBinding({
      key: 'tab',
    }, function(range, context) {
      this.quill.formatText(range, 'indent', true);
    });
  }

}
