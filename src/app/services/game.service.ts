import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Game from '../models/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  get passedGames$(): Observable<Game[]> {
    return this.http.get<Game[]>('http://localhost:8080/api/v1/game/passed');
  }
}
