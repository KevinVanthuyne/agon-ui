import { Component, Input } from '@angular/core';
import AbstractDivision from '../../models/division/abstract-division';
import fitterText from 'fitter-happier-text';

@Component({ template: '' })
export abstract class TickerItemComponent {
  @Input() data?: TickerData;

  public fitText(): void {
    const elements = document.getElementsByClassName('fit-text');
    if (
      elements.length <= 0 ||
      elements.item(0)?.tagName.toLowerCase() === 'svg'
    )
      return;
    fitterText(elements);
  }
}

export interface TickerData {
  division?: AbstractDivision;
}
