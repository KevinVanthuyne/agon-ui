import { Component } from '@angular/core';
import { ScoreService } from '../../../services/score.service';
import { finalize, map, Observable } from 'rxjs';
import Score from '../../../models/score';
import fitterText from 'fitter-happier-text';

@Component({
  selector: 'app-division-champion',
  templateUrl: './division-champion.component.html',
  styleUrls: ['./division-champion.component.scss'],
})
export class DivisionChampionComponent {
  divisionId = 3;

  constructor(private scoreService: ScoreService) {}

  get currentTopScore$(): Observable<Score | undefined> {
    return this.scoreService.getHighestScores$(this.divisionId).pipe(
      map((scores) => scores[0]),
      finalize(() => {
        DivisionChampionComponent.fitText();
      })
    );
  }

  public static fitText(): void {
    const elements = document.getElementsByClassName('fit-text');
    if (
      elements.length <= 0 ||
      elements.item(0)?.tagName.toLowerCase() === 'svg'
    )
      return;
    fitterText(elements);
  }
}
