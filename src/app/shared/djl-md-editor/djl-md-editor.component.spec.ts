import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjlMdEditorComponent } from './djl-md-editor.component';

describe('DjlMdEditorComponent', () => {
  let component: DjlMdEditorComponent;
  let fixture: ComponentFixture<DjlMdEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjlMdEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjlMdEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
