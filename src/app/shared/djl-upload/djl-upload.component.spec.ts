import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjlUploadComponent } from './djl-upload.component';

describe('DjlUploadComponent', () => {
  let component: DjlUploadComponent;
  let fixture: ComponentFixture<DjlUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjlUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjlUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
