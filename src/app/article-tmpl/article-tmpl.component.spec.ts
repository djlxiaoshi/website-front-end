import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTmplComponent } from './article-tmpl.component';

describe('ArticleTmplComponent', () => {
  let component: ArticleTmplComponent;
  let fixture: ComponentFixture<ArticleTmplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleTmplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
