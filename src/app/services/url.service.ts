import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  get passedGames(): string {
    return `${environment.apiUrl}/api/v1/game/passed`;
  }

  get activeGame(): string {
    return `${environment.apiUrl}/api/v1/game/active`;
  }

  get allGames(): string {
    return `${environment.apiUrl}/api/v1/game`;
  }

  get allRankings(): string {
    return `${environment.apiUrl}/api/v1/score/ranking/all`;
  }
}
