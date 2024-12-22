import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import HighScoreDivision from 'src/app/models/division/high-score-division';
import { HighScoreCompetitionService } from 'src/app/services/competition/high-score-competition.service';
import { TickerItemComponent } from '../ticker-item.component';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent
  extends TickerItemComponent
  implements OnInit
{
  division: HighScoreDivision | undefined;

  constructor(private competitionService: HighScoreCompetitionService) {
    super();
  }

  ngOnInit(): void {
    this.competitionService.allDivisions$
      .pipe(take(1))
      .subscribe((divisions) => {
        // TODO for now only a single game leaderboard is supported1
        if (divisions && divisions.length > 0) {
          this.division = divisions[0];
        }
      });
  }

  get divisions(): HighScoreDivision[] {
    if (this.division) {
      return [this.division];
    }
    return [];
  }
}
