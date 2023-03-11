import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  public static readonly URLS = {
    games: {
      root: `${environment.apiUrl}/api/v1/games`,
      passed: `${environment.apiUrl}/api/v1/games/passed`,
      active: `${environment.apiUrl}/api/v1/games/active`,
    },
    rankings: {
      root: `${environment.apiUrl}/api/v1/scores/ranking/all`,
    },
    competitions: {
      root: `${environment.apiUrl}/api/v1/competitions`,
      highScore: `${environment.apiUrl}/api/v1/competitions/high-score`,
      period: `${environment.apiUrl}/api/v1/competitions/period`,
    },
    scores: {
      root: `${environment.apiUrl}/api/v1/scores`,
      active: `${environment.apiUrl}/api/v1/scores/active`,
      divisions: `${environment.apiUrl}/api/v1/scores/divisions`,
    },
    user: `${environment.apiUrl}/api/v1/auth/user`,
    logout: `${environment.apiUrl}/api/v1/auth/logout`,
    login: `${environment.apiUrl}/api/v1/auth/login`,
  };
}
