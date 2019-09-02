import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspmvcComponent } from './aspmvc.component';

describe('AspmvcComponent', () => {
  let component: AspmvcComponent;
  let fixture: ComponentFixture<AspmvcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspmvcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspmvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
