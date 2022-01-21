import { Component, Input, OnInit } from '@angular/core';
import Game from '../../models/game';
import { ScoreService } from '../../services/score.service';
import HighScore from '../../models/high-score';
import { take } from 'rxjs';

@Component({
  selector: 'app-game-column',
  templateUrl: './game-column.component.html',
  styleUrls: ['./game-column.component.scss'],
})
export class GameColumnComponent implements OnInit {
  @Input() game!: Game;
  highScores: HighScore[] = [];

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.scoreService
      .ranking$(this.game.id)
      .pipe(take(1))
      .subscribe((highScores) => {
        this.highScores = highScores;
      });
  }
}
