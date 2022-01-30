import { AfterViewInit, Component } from '@angular/core';
import { TickerItemComponent } from '../ticker-item.component';
import * as fitterText from 'fitter-happier-text';
import { ScoreService } from '../../../services/score.service';
import HighScore from '../../../models/high-score';
import { finalize, map, Observable, switchMap } from 'rxjs';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-score-to-beat',
  templateUrl: './score-to-beat.component.html',
  styleUrls: ['./score-to-beat.component.scss'],
})
export class ScoreToBeatComponent
  implements TickerItemComponent, AfterViewInit
{
  constructor(
    private scoreService: ScoreService,
    private gameService: GameService
  ) {}

  ngAfterViewInit() {
    ScoreToBeatComponent.fitText();
  }

  get currentHighScore$(): Observable<HighScore | undefined> {
    return this.gameService.activeGame$.pipe(
      switchMap((game) => this.scoreService.getHighScores$(game.id)),
      map((highScores) => (highScores ? highScores[0] : undefined)),
      finalize(() => {
        // TODO
        console.log('Fitting');
        ScoreToBeatComponent.fitText();
      })
    );
  }

  private static fitText(): void {
    const elements = document.getElementsByClassName('fit-text');
    fitterText(elements);
  }
}
