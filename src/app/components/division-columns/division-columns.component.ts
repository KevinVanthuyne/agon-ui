import { Component, Input } from '@angular/core';
import Game from '../../models/game';

@Component({
  selector: 'app-division-columns',
  templateUrl: './division-columns.component.html',
  styleUrls: ['./division-columns.component.scss'],
})
export class DivisionColumnsComponent {
  // TODO refactor to divisions
  @Input() games!: Game[];
}
