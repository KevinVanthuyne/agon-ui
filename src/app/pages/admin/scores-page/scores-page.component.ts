import { Component, OnInit, ViewChild } from '@angular/core';
import Score from '../../../models/score';
import { ScoreService } from '../../../services/score.service';
import AbstractDivision from '../../../models/division/abstract-division';
import { HighScoreCompetitionService } from '../../../services/competition/high-score-competition.service';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-scores-page',
  templateUrl: './scores-page.component.html',
  styleUrls: ['./scores-page.component.scss'],
})
export class ScoresPageComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort | undefined;

  displayedColumns = ['timestamp', /*'id',*/ 'username', 'points', 'delete'];
  divisions: AbstractDivision[] = [];
  divisionFormControl = new FormControl<number>(0);
  dataSource = new MatTableDataSource([] as Score[]);

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

  updateDivision(divisionId: number): void {
    this.scoreService.getAllScoresOnce$(divisionId).subscribe((scores) => {
      this.dataSource.data = scores;
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
    });
  }

  deleteScore(score: Score): void {
    if (
      confirm(
        `Are you sure you want to delete the following score?\n\n- Id: ${score.id}\n- User: ${score.username}\n- Points: ${score.points}`
      )
    ) {
      this.scoreService.deleteScore(score.id!).subscribe(() => {
        this.updateDivision(this.divisionFormControl.value!);
      });
    }
  }
}
