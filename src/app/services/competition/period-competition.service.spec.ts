import { TestBed } from '@angular/core/testing';

import { PeriodCompetitionService } from './period-competition.service';

describe('PeriodCompetitionService', () => {
  let service: PeriodCompetitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodCompetitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
