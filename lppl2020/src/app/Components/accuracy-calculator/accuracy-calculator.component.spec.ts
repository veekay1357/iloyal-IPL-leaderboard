import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuracyCalculatorComponent } from './accuracy-calculator.component';

describe('AccuracyCalculatorComponent', () => {
  let component: AccuracyCalculatorComponent;
  let fixture: ComponentFixture<AccuracyCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccuracyCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccuracyCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
