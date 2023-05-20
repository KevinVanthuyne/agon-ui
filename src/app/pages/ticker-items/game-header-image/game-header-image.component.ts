import { Component, OnInit } from '@angular/core';
import { TickerItemComponent } from '../ticker-item.component';
import GameStyle from '../../../models/game-style';

@Component({
  selector: 'app-game-header-image',
  templateUrl: './game-header-image.component.html',
  styleUrls: ['./game-header-image.component.scss'],
})
export class GameHeaderImageComponent
  extends TickerItemComponent
  implements OnInit
{
  gameStyle: GameStyle | undefined;

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (!this.data?.division?.game?.gameStyle) return;

    this.gameStyle = this.data?.division.game.gameStyle;
  }
}
