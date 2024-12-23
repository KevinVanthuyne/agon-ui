import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Game, { showGame } from '../models/game';
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
import { GameCategory } from '../models/game-category';
import { GameStatus } from '../models/game-status';

@Injectable({
  providedIn: 'root',
})
export class GameService extends CachingService implements OnDestroy {
  private gameCache$: Observable<Game[]> | undefined;

  constructor(private readonly http: HttpClient) {
    super();
  }

  get$(id: number): Observable<Game> {
    return this.http.get<Game>(`${UrlService.URLS.games.root}/${id}`);
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

  get visibleGames$(): Observable<Game[]> {
    return this.allGames$.pipe(
      map((games) => games.filter((game) => showGame(game)))
    );
  }

  addGame$(name: string): Observable<Game> {
    return this.http.post<Game>(UrlService.URLS.games.root, { name });
  }

  /**
   * Edits the game with the given id to the given name.
   */
  editGame$(model: {
    id: number;
    name?: string;
    description?: string;
    collectionHistory?: string;
    year?: number;
    category?: GameCategory;
    status?: GameStatus;
  }): Observable<Game> {
    return this.http.put<Game>(UrlService.URLS.games.root, model);
  }

  delete$(gameId: number): Observable<void> {
    return this.http.delete<void>(`${UrlService.URLS.games.root}/${gameId}`);
  }
}
