import { Component, Input } from '@angular/core';
import GameStyle from '../../models/game-style';
import Score from '../../models/score';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss'],
})
export class ScoreCardComponent {
  @Input() score!: Score;
  @Input() gameStyle!: GameStyle;
}
