import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../../services/game.service';
import Game from '../../../../models/game';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
})
export class GamesPageComponent implements OnInit {
  displayedColumns = ['id', 'name', 'editStyle', 'delete'];
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.allGames$.subscribe((games) => (this.games = games));
  }

  delete(game: Game) {
    if (confirm(`Are you sure you want to delete game "${game.name}?"`)) {
      this.gameService.delete$(game.id).subscribe();
    }
  }
}
