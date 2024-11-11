import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import Game from '../../models/game';
import { map, Observable, take } from 'rxjs';
import { GameStatus } from '../../models/game-status';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
})
export class GamesPageComponent {
  protected games$ = this.gameService.allGames$.pipe(take(1));

  constructor(private readonly gameService: GameService) {}

  showGame(game: Game): boolean {
    return game.status === GameStatus.ON_LOCATION;
  }

  get noGamesVisible$(): Observable<boolean> {
    return this.games$.pipe(
      map((games) => games.every((game) => !this.showGame(game)))
    );
  }
}
