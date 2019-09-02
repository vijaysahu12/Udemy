import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpfComponent } from './wpf.component';

describe('WpfComponent', () => {
  let component: WpfComponent;
  let fixture: ComponentFixture<WpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
