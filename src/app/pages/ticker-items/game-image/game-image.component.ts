import { Component } from '@angular/core';
import { TickerItemComponent } from '../ticker-item.component';
import { GameService } from '../../../services/game.service';
import { Observable } from 'rxjs';
import Game from '../../../models/game';

@Component({
  selector: 'app-game-image',
  templateUrl: './game-image.component.html',
  styleUrls: ['./game-image.component.scss'],
})
export class GameImageComponent extends TickerItemComponent {
  constructor(private gameService: GameService) {
    super();
  }

  get activeGame$(): Observable<Game> {
    return this.gameService.activeGame$;
  }
}
