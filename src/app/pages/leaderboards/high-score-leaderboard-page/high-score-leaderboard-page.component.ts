import { Component, OnInit } from '@angular/core';
import { HighScoreCompetitionService } from '../../../services/competition/high-score-competition.service';
import { take } from 'rxjs';
import HighScoreDivision from '../../../models/division/high-score-division';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-high-score-leaderboard-page',
  templateUrl: './high-score-leaderboard-page.component.html',
  styleUrls: ['./high-score-leaderboard-page.component.scss'],
})
export class HighScoreLeaderboardPageComponent implements OnInit {
  divisions: HighScoreDivision[] = [];

  constructor(
    private competitionService: HighScoreCompetitionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.competitionService.allDivisions$
      .pipe(take(1))
      .subscribe((divisions) => {
        this.divisions = divisions;
      });

    // const redirectParam = this.route.snapshot.queryParamMap.get('redirect');
    // if (redirectParam && redirectParam === 'ticker') {
    //   setTimeout(
    //     () => this.router.navigate(['ticker']),
    //     environment.tickerPageInterval * 2
    //   );
    // }
  }
}
