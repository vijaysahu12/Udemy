import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListnerComponent } from './event-listner.component';

describe('EventListnerComponent', () => {
  let component: EventListnerComponent;
  let fixture: ComponentFixture<EventListnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
