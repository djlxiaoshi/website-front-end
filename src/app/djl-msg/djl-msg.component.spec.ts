import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DjlMsgComponent } from './djl-msg.component';

describe('DjlMsgComponent', () => {
  let component: DjlMsgComponent;
  let fixture: ComponentFixture<DjlMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DjlMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DjlMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
