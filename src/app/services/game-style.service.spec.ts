import { TestBed } from '@angular/core/testing';

import { GameStyleService } from './game-style.service';

describe('GameStyleService', () => {
  let service: GameStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
