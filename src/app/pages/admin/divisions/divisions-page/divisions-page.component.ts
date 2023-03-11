import { Component, OnInit } from '@angular/core';
import AbstractDivision from '../../../../models/division/abstract-division';
import { HighScoreCompetitionService } from '../../../../services/competition/high-score-competition.service';

@Component({
  selector: 'app-divisions-page',
  templateUrl: './divisions-page.component.html',
  styleUrls: ['./divisions-page.component.scss'],
})
export class DivisionsPageComponent implements OnInit {
  displayedColumns = ['id', 'gameName', 'gameId', 'delete'];
  divisions: AbstractDivision[] = [];

  // TODO only HighScoreCompetition is supported for now
  constructor(private compService: HighScoreCompetitionService) {}

  ngOnInit(): void {
    this.compService.allDivisions$.subscribe((divs) => (this.divisions = divs));
  }

  deleteDivision(division: AbstractDivision) {
    if (
      confirm(
        `Are you sure you want to delete division ${division.id} with game "${division.game.name}?"`
      )
    ) {
      this.compService.deleteDivision(division.id).subscribe();
    }
  }
}
