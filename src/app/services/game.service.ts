import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Game from '../models/game';
import { Observable, shareReplay, switchMap, takeUntil, timer } from 'rxjs';
import { CachingService } from './caching-service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root',
})
export class GameService extends CachingService implements OnDestroy {
  private gameCache$: Observable<Game[]> | undefined;

  constructor(private http: HttpClient) {
    super();
  }

  get allGames$(): Observable<Game[]> {
    if (!this.gameCache$) {
      this.gameCache$ = timer(0, GameService.REFRESH_INTERVAL).pipe(
        switchMap(() => this.http.get<Game[]>(UrlService.URLS.games.root)),
        takeUntil(this.destroy$),
        shareReplay(1)
      );
    }
    return this.gameCache$;
  }

  addGame$(name: string): Observable<Game> {
    return this.http.post<Game>(UrlService.URLS.games.root, { name });
  }

  delete$(gameId: number): Observable<void> {
    return this.http.delete<void>(`${UrlService.URLS.games.root}/${gameId}`);
  }
}
