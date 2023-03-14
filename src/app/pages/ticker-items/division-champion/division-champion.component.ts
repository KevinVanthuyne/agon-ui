import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../../services/score.service';
import { finalize, map, Observable } from 'rxjs';
import Score from '../../../models/score';
import fitterText from 'fitter-happier-text';
import { TickerItemComponent } from '../ticker-item.component';
import AbstractDivision from '../../../models/division/abstract-division';

@Component({
  selector: 'app-division-champion',
  templateUrl: './division-champion.component.html',
  styleUrls: ['./division-champion.component.scss'],
})
export class DivisionChampionComponent
  extends TickerItemComponent
  implements OnInit
{
  division: AbstractDivision | undefined;
  currentTopScore$: Observable<Score> | undefined;

  constructor(private scoreService: ScoreService) {
    super();
  }

  ngOnInit(): void {
    if (!this.data?.division) return;

    this.division = this.data?.division;
    this.currentTopScore$ = this.scoreService
      .getHighestScores$(this.data!.division!.id)
      .pipe(
        map((scores) => scores[0]),
        finalize(() => {
          DivisionChampionComponent.fitText();
        })
      );
  }

  public static fitText(): void {
    console.log('fitting');
    const elements = document.getElementsByClassName('fit-text');
    if (
      elements.length <= 0 ||
      elements.item(0)?.tagName.toLowerCase() === 'svg'
    )
      return;
    fitterText(elements);
  }
}
