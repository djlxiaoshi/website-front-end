import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjlEditorComponent } from './djl-editor.component';

describe('DjlEditorComponent', () => {
  let component: DjlEditorComponent;
  let fixture: ComponentFixture<DjlEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjlEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjlEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
