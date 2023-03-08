import { Component, Input } from '@angular/core';
import AbstractDivision from '../../models/division/abstract-division';
import Game from '../../models/game';
import GameStyle from '../../models/game-style';

@Component({
  selector: 'app-division-column',
  templateUrl: './division-column.component.html',
  styleUrls: ['./division-column.component.scss'],
})
export class DivisionColumnComponent {
  @Input() division!: AbstractDivision;

  get game(): Game {
    return this.division.game;
  }

  get gameStyle(): GameStyle {
    return this.game.gameStyle;
  }
}
