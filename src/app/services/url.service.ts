import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  public static readonly URLS = {
    games: {
      root: `${environment.apiUrl}/api/v1/games`,
    },
    gameStyles: {
      root: `${environment.apiUrl}/api/v1/game-styles`,
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
    logout: `${environment.apiUrl}/api/v1/auth/logout`,
    login: `${environment.apiUrl}/api/v1/auth/login`,
  };
}
