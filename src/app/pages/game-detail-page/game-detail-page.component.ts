import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../services/game.service";
import Game from "../../models/game";

@Component({
  selector: 'app-game-detail-page',
  templateUrl: './game-detail-page.component.html',
  styleUrls: ['./game-detail-page.component.scss']
})
export class GameDetailPageComponent implements OnInit {
  game: Game | undefined;

  constructor(private readonly route: ActivatedRoute,
              private readonly gameService: GameService) {
  }

  ngOnInit(): void {
    this.getGame();
  }

  private getGame(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameService.get$(id).subscribe(game => this.game = game);
  }
}
