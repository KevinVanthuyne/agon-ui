import { Component } from '@angular/core';
import { TickerItemComponent } from '../ticker-item.component';
import { GameService } from '../../../services/game.service';
import Game from '../../../models/game';

@Component({
  selector: 'app-game-of-the-month',
  templateUrl: './game-of-the-month.component.html',
  styleUrls: ['./game-of-the-month.component.scss'],
})
export class GameOfTheMonthComponent implements TickerItemComponent {
  constructor(private gameService: GameService) {}

  get currentGame(): Game | undefined {
    return this.gameService.currentGame;
  }
}
