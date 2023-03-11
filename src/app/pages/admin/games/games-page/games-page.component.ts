import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../../services/game.service';
import Game from '../../../../models/game';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
})
export class GamesPageComponent implements OnInit {
  displayedColumns = ['id', 'name'];
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.allGames$.subscribe((games) => (this.games = games));
  }
}
