import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGameResultsComponent } from './all-game-results.component';

describe('AllGameResultsComponent', () => {
  let component: AllGameResultsComponent;
  let fixture: ComponentFixture<AllGameResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGameResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGameResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
