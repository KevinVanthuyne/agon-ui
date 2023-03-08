import { Component, Input } from '@angular/core';
import AbstractDivision from '../../models/division/abstract-division';

@Component({
  selector: 'app-division-columns',
  templateUrl: './division-columns.component.html',
  styleUrls: ['./division-columns.component.scss'],
})
export class DivisionColumnsComponent {
  @Input() divisions!: AbstractDivision[];
}
