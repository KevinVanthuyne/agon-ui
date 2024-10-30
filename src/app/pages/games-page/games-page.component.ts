import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import Game from '../../models/game';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
})
export class GamesPageComponent {
  protected games$ = this.gameService.allGames$.pipe(take(1));

  constructor(private readonly gameService: GameService) {}
}
