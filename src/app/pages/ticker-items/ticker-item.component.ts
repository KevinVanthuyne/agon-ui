import { Component, Input } from '@angular/core';
import AbstractDivision from '../../models/division/abstract-division';

@Component({ template: '' })
export abstract class TickerItemComponent {
  @Input() data?: TickerData;
}

export interface TickerData {
  division?: AbstractDivision;
}
