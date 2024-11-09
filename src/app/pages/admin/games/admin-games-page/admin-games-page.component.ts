import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../../services/game.service';
import Game from '../../../../models/game';

@Component({
  selector: 'app-admin-games-page',
  templateUrl: './admin-games-page.component.html',
  styleUrls: ['./admin-games-page.component.scss'],
})
export class AdminGamesPageComponent implements OnInit {
  displayedColumns = [
    'id',
    'name',
    'status',
    // 'bgColor',
    // 'bgImg',
    'headerImg',
    // 'borderColor',
    // 'fontColor',
    'edit',
    'editStyle',
    'delete',
  ];
  games: Game[] = [];

  constructor(private readonly gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.allGames$.subscribe((games) => {
      this.games = games;
    });
  }

  delete(game: Game) {
    if (confirm(`Are you sure you want to delete game "${game.name}?"`)) {
      this.gameService.delete$(game.id).subscribe();
    }
  }
}
