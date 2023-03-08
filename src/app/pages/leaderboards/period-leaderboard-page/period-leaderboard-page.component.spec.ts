import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodLeaderboardPageComponent } from './period-leaderboard-page.component';

describe('PeriodLeaderboardPageComponent', () => {
  let component: PeriodLeaderboardPageComponent;
  let fixture: ComponentFixture<PeriodLeaderboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodLeaderboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodLeaderboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
