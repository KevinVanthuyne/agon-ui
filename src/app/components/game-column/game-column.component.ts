import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-column',
  templateUrl: './game-column.component.html',
  styleUrls: ['./game-column.component.scss'],
})
export class GameColumnComponent {
  @Input() title!: string;
}
