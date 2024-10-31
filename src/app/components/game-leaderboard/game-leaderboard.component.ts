import { Component, Input, OnInit } from '@angular/core';
import Game from '../../models/game';
import { ScoreService } from '../../services/score.service';
import { Observable, of } from 'rxjs';
import Score from '../../models/score';
import { DivisionService } from '../../services/division.service';
import AbstractDivision from '../../models/division/abstract-division';

@Component({
  selector: 'app-game-leaderboard',
  templateUrl: './game-leaderboard.component.html',
  styleUrls: ['./game-leaderboard.component.scss'],
})
export class GameLeaderboardComponent implements OnInit {
  @Input() game!: Game;

  protected divisions$: Observable<AbstractDivision[]> = of([]);
  protected displayedColumns = ['rank', 'name', 'score', 'timestamp'];

  constructor(
    private readonly scoreService: ScoreService,
    private readonly divisionService: DivisionService
  ) {}

  ngOnInit(): void {
    this.divisions$ = this.divisionService.getDivisionsForGame$(this.game.id);
  }

  getScores$(divisionId: number): Observable<Score[]> {
    return this.scoreService.getHighestScores$(divisionId);
  }
}
