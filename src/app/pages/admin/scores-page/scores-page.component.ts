import { Component, OnInit } from '@angular/core';
import Score from '../../../models/score';
import { ScoreService } from '../../../services/score.service';
import AbstractDivision from '../../../models/division/abstract-division';
import { HighScoreCompetitionService } from '../../../services/competition/high-score-competition.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-scores-page',
  templateUrl: './scores-page.component.html',
  styleUrls: ['./scores-page.component.scss'],
})
export class ScoresPageComponent implements OnInit {
  displayedColumns = ['id', 'username', 'points'];
  divisions: AbstractDivision[] = [];
  divisionFormControl = new FormControl<number>(0);
  scores: Score[] = [];

  // TODO only supports HighScoreCompetitions for now
  constructor(
    private competitionService: HighScoreCompetitionService,
    private scoreService: ScoreService
  ) {}

  ngOnInit(): void {
    this.competitionService.allDivisions$.subscribe(
      (divisions) => (this.divisions = divisions)
    );
  }

  updateDivision(divisionId: number) {
    this.scoreService
      .getAllScoresOnce$(divisionId)
      .subscribe((scores) => (this.scores = scores));
  }
}
