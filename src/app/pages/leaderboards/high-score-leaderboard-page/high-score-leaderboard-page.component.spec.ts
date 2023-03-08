import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighScoreLeaderboardPageComponent } from './high-score-leaderboard-page.component';

describe('HighScoreLeaderboardPageComponent', () => {
  let component: HighScoreLeaderboardPageComponent;
  let fixture: ComponentFixture<HighScoreLeaderboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighScoreLeaderboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighScoreLeaderboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
