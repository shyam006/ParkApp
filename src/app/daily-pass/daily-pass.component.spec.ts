import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPassComponent } from './daily-pass.component';

describe('DailyPassComponent', () => {
  let component: DailyPassComponent;
  let fixture: ComponentFixture<DailyPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
