import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import PeriodDivision from '../../../models/division/period-division';
import { PeriodCompetitionService } from '../../../services/competition/period-competition.service';

@Component({
  selector: 'app-period-leaderboard-page',
  templateUrl: './period-leaderboard-page.component.html',
  styleUrls: ['./period-leaderboard-page.component.scss'],
})
export class PeriodLeaderboardPageComponent implements OnInit {
  divisions: PeriodDivision[] = [];

  constructor(private competitionService: PeriodCompetitionService) {}

  ngOnInit(): void {
    this.competitionService.allDivisions$
      .pipe(take(1))
      .subscribe((divisions) => {
        this.divisions = divisions;
      });
  }
}
