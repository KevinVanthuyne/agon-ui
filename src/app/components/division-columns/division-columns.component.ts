import { Component, Input } from '@angular/core';
import AbstractDivision from '../../models/division/abstract-division';
import { showGame } from '../../models/game';

@Component({
  selector: 'app-division-columns',
  templateUrl: './division-columns.component.html',
  styleUrls: ['./division-columns.component.scss'],
})
export class DivisionColumnsComponent {
  @Input() divisions!: AbstractDivision[];
  @Input() displayLarge = false;

  get filteredDivisions(): AbstractDivision[] {
    return this.divisions.filter((division) => showGame(division.game));
  }
}
