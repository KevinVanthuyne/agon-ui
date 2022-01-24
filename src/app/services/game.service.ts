import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Game from '../models/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  currentGame: Game | undefined;

  constructor(private http: HttpClient) {
    this.http
      .get<Game>('http://localhost:8080/api/v1/game/active')
      .subscribe((game) => (this.currentGame = game));
  }

  get passedGames$(): Observable<Game[]> {
    return this.http.get<Game[]>('http://localhost:8080/api/v1/game/passed');
  }
}
