import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekWinnersComponent } from './week-winners.component';

describe('WeekWinnersComponent', () => {
  let component: WeekWinnersComponent;
  let fixture: ComponentFixture<WeekWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekWinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
