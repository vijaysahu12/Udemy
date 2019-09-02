import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspcoreComponent } from './aspcore.component';

describe('AspcoreComponent', () => {
  let component: AspcoreComponent;
  let fixture: ComponentFixture<AspcoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspcoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
