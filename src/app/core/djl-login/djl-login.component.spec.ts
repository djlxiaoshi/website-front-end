import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjlLoginComponent } from './djl-login.component';

describe('DjlLoginComponent', () => {
  let component: DjlLoginComponent;
  let fixture: ComponentFixture<DjlLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjlLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjlLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
