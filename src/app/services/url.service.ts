import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  public static readonly URLS = {
    games: {
      root: `${environment.apiUrl}/api/v1/game`,
      passed: `${environment.apiUrl}/api/v1/game/passed`,
      active: `${environment.apiUrl}/api/v1/game/active`,
    },
    rankings: {
      root: `${environment.apiUrl}/api/v1/score/ranking/all`,
    },
    competitions: {
      root: `${environment.apiUrl}/api/v1/competitions`,
      highScore: `${environment.apiUrl}/api/v1/competitions/high-score`,
      period: `${environment.apiUrl}/api/v1/competitions/period`,
    },
    scores: {
      active: `${environment.apiUrl}/api/v1/scores/active`,
    },
  };
}
