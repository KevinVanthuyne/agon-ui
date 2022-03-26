import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  get passedGames(): string {
    return 'http://localhost:8080/api/v1/game/passed';
  }

  get activeGame(): string {
    return 'http://localhost:8080/api/v1/game/active';
  }

  get allGames(): string {
    return 'http://localhost:8080/api/v1/game';
  }
}
