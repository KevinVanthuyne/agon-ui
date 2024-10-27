import { Component } from '@angular/core';
import {GameService} from "../../services/game.service";
import Game from "../../models/game";
import {Observable} from "rxjs";

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent {
  constructor(private readonly gameService: GameService) {
  }

  get games$(): Observable<Game[]> {
    return this.gameService.allGames$;
  }
}
