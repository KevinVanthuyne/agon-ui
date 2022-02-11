import { Component } from '@angular/core';
import { TickerItemComponent } from '../ticker-item.component';
import { finalize, Observable, switchMap } from 'rxjs';
import HighScore from '../../../models/high-score';
import { ScoreService } from '../../../services/score.service';
import { GameService } from '../../../services/game.service';
import { ScoreToBeatComponent } from '../score-to-beat/score-to-beat.component';

@Component({
  selector: 'app-runner-up-scores',
  templateUrl: './runner-up-scores.component.html',
  styleUrls: ['./runner-up-scores.component.scss'],
})
export class RunnerUpScoresComponent implements TickerItemComponent {
  constructor(
    private scoreService: ScoreService,
    private gameService: GameService
  ) {}

  get currentHighScore$(): Observable<HighScore[] | undefined> {
    return this.gameService.activeGame$.pipe(
      switchMap((game) => this.scoreService.getHighScores$(game.id)),
      finalize(() => {
        ScoreToBeatComponent.fitText();
      })
    );
  }
}
