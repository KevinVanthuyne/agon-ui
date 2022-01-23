import { Component, OnInit } from '@angular/core';
import { GameService } from './services/game.service';
import Game from './models/game';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  games: Game[] = [];

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.passedGames$.pipe(take(1)).subscribe((games) => {
      this.games = games.reverse();
    });
  }
}
