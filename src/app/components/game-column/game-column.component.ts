import { Component, Input } from '@angular/core';
import Game from '../../models/game';
import { ScoreService } from '../../services/score.service';
import { Observable } from 'rxjs';
import HighScore from '../../models/high-score';

@Component({
  selector: 'app-game-column',
  templateUrl: './game-column.component.html',
  styleUrls: ['./game-column.component.scss'],
})
export class GameColumnComponent {
  @Input() game!: Game;

  constructor(private scoreService: ScoreService) {}

  get highScores$(): Observable<HighScore[]> {
    return this.scoreService.getHighScores$(this.game.id);
  }
}
