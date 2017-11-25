import { Component, OnInit, Input } from '@angular/core';

export interface Article {
  title: string;
  content: string;
  author: string;
  time: string;
  tag: string[];
}

@Component({
  selector: 'app-article-tmpl',
  templateUrl: './article-tmpl.component.html',
  styleUrls: ['./article-tmpl.component.scss']
})

export class ArticleTmplComponent implements OnInit {

  @Input() articles: Article;

  constructor() { }

  ngOnInit() {
  }

}
