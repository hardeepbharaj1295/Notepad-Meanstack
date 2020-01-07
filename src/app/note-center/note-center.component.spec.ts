import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCenterComponent } from './note-center.component';

describe('NoteCenterComponent', () => {
  let component: NoteCenterComponent;
  let fixture: ComponentFixture<NoteCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
