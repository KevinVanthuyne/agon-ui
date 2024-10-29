import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  map,
  Observable,
  shareReplay,
  switchMap,
  takeUntil,
  timer,
} from 'rxjs';
import { CachingService } from './caching-service';
import { UrlService } from './url.service';
import Score from '../models/score';

@Injectable({
  providedIn: 'root',
})
export class ScoreService extends CachingService implements OnDestroy {
  private divisionScoreCache$: Observable<Map<number, Score[]>> | undefined;

  constructor(private readonly http: HttpClient) {
    super();
  }

  getAllScoresOnce$(divisionId: number): Observable<Score[]> {
    return this.http.get<Score[]>(
      `${UrlService.URLS.scores.divisions}/${divisionId}`
    );
  }

  getHighestScores$(divisionId: number): Observable<Score[]> {
    return this.allHighestScores$.pipe(
      map((divisionScores) => divisionScores.get(divisionId) || [])
    );
  }

  private get allHighestScores$(): Observable<Map<number, Score[]>> {
    if (this.divisionScoreCache$) return this.divisionScoreCache$;

    this.divisionScoreCache$ = timer(0, ScoreService.REFRESH_INTERVAL).pipe(
      switchMap(() => this.getAllActiveScores$()),
      takeUntil(this.destroy$),
      shareReplay(1)
    );
    return this.divisionScoreCache$;
  }

  addScore$(score: Score): Observable<void> {
    return this.http.post<void>(UrlService.URLS.scores.root, score);
  }

  deleteScore(scoreId: string): Observable<void> {
    return this.http.delete<void>(`${UrlService.URLS.scores.root}/${scoreId}`);
  }

  private getAllActiveScores$(): Observable<Map<number, Score[]>> {
    return this.http
      .get<{ [divisionId: number]: Score[] }>(UrlService.URLS.scores.active)
      .pipe(
        map((divisionScores) => {
          return new Map<number, Score[]>(
            Object.entries(divisionScores).map((entry) => [
              Number.parseInt(entry[0]),
              entry[1],
            ])
          );
        })
      );
  }
}
