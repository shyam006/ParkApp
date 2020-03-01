import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPassComponent } from './monthly-pass.component';

describe('MonthlyPassComponent', () => {
  let component: MonthlyPassComponent;
  let fixture: ComponentFixture<MonthlyPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
