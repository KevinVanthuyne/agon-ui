import { Component, OnInit } from '@angular/core';
import Game from '../../../models/game';
import { GameService } from '../../../services/game.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-period-leaderboard-page',
  templateUrl: './period-leaderboard-page.component.html',
  styleUrls: ['./period-leaderboard-page.component.scss'],
})
export class PeriodLeaderboardPageComponent implements OnInit {
  games: Game[] = [];

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.passedGames$.pipe(take(1)).subscribe((games) => {
      this.games = games.reverse();
    });
  }
}
