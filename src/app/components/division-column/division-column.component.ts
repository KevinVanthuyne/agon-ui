import { Component, Input } from '@angular/core';
import AbstractDivision from '../../models/division/abstract-division';
import Game from '../../models/game';
import GameStyle from '../../models/game-style';
import { ScoreService } from '../../services/score.service';
import { Observable } from 'rxjs';
import Score from '../../models/score';

@Component({
  selector: 'app-division-column',
  templateUrl: './division-column.component.html',
  styleUrls: ['./division-column.component.scss'],
})
export class DivisionColumnComponent {
  @Input() division!: AbstractDivision;
  @Input() displayLarge = false;

  constructor(private readonly scoreService: ScoreService) {}

  get game(): Game {
    return this.division.game;
  }

  get gameStyle(): GameStyle {
    return this.game.gameStyle;
  }

  get scores$(): Observable<Score[]> {
    return this.scoreService.getHighestScores$(this.division.id);
  }
}
