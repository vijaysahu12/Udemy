import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MssqlComponent } from './mssql.component';

describe('MssqlComponent', () => {
  let component: MssqlComponent;
  let fixture: ComponentFixture<MssqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MssqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MssqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
