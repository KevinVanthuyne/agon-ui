import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import HighScore from '../models/high-score';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  constructor(private http: HttpClient) {}

  ranking$(gameId: number): Observable<HighScore[]> {
    return this.http.get<HighScore[]>(
      `http://localhost:8080/api/v1/score/game/${gameId}/ranking`
    );
  }
}
