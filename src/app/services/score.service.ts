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

@Injectable({
  providedIn: 'root',
})
export class ScoreService extends CachingService implements OnDestroy {
  private highScoreCache$: Observable<Map<number, HighScore[]>> | undefined;

  constructor(private http: HttpClient) {
    super();
  }

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
}
