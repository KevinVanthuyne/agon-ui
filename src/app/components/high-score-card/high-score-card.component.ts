import { Component, Input } from '@angular/core';
import HighScore from '../../models/high-score';

@Component({
  selector: 'app-high-score-card',
  templateUrl: './high-score-card.component.html',
  styleUrls: ['./high-score-card.component.scss'],
})
export class HighScoreCardComponent {
  @Input() highScore!: HighScore;
}
