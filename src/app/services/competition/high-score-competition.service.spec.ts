import { TestBed } from '@angular/core/testing';

import { HighScoreCompetitionService } from './high-score-competition.service';

describe('HighScoreCompetitionService', () => {
  let service: HighScoreCompetitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighScoreCompetitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
