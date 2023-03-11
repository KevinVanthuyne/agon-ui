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
import HighScore from '../models/high-score';
import { CachingService } from './caching-service';
import { UrlService } from './url.service';
import Score from '../models/score';

@Injectable({
  providedIn: 'root',
})
export class ScoreService extends CachingService implements OnDestroy {
  private highScoreCache$: Observable<Map<number, HighScore[]>> | undefined;
  private divisionScoreCache$: Observable<Map<number, Score[]>> | undefined;

  constructor(private http: HttpClient) {
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

  // TODO methods underneath are deprecated

  get allHighScores$(): Observable<Map<number, HighScore[]>> {
    if (!this.highScoreCache$) {
      this.highScoreCache$ = timer(0, ScoreService.REFRESH_INTERVAL).pipe(
        switchMap(() => this.getAllRankings$()),
        takeUntil(this.destroy$),
        shareReplay(1)
      );
    }
    return this.highScoreCache$;
  }

  getHighScores$(gameId: number): Observable<HighScore[]> {
    return this.allHighScores$.pipe(
      map((highScoreMap) => highScoreMap?.get(gameId) || [])
    );
  }

  private getAllRankings$(): Observable<Map<number, HighScore[]>> {
    return this.http
      .get<{ [gameId: number]: HighScore[] }>(UrlService.URLS.rankings.root)
      .pipe(
        map((highScoresObject) => {
          return new Map<number, HighScore[]>(
            Object.entries(highScoresObject).map((entry) => [
              Number.parseInt(entry[0]),
              entry[1],
            ])
          );
        })
      );
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
