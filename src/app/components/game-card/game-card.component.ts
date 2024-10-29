import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
  @Input() name?: string;
  @Input() description?: string;
  @Input() cabinetImageUrl!: string;
}
