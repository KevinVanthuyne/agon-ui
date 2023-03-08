import { Component, OnInit } from '@angular/core';
import { HighScoreCompetitionService } from '../../../services/competition/high-score-competition.service';
import { take } from 'rxjs';
import HighScoreDivision from '../../../models/division/high-score-division';
import Game from '../../../models/game';

@Component({
  selector: 'app-high-score-leaderboard-page',
  templateUrl: './high-score-leaderboard-page.component.html',
  styleUrls: ['./high-score-leaderboard-page.component.scss'],
})
export class HighScoreLeaderboardPageComponent implements OnInit {
  divisions: HighScoreDivision[] = [];

  constructor(private competitionService: HighScoreCompetitionService) {}

  ngOnInit(): void {
    this.competitionService.allDivisions$
      .pipe(take(1))
      .subscribe((divisions) => {
        this.divisions = divisions;
      });
  }

  get games(): Game[] {
    return this.divisions.map((div) => div.game);
  }
}
