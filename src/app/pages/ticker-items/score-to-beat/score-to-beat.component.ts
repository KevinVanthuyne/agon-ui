import { AfterViewInit, Component } from '@angular/core';
import { TickerItemComponent } from '../ticker-item.component';
import * as fitterText from 'fitter-happier-text';

@Component({
  selector: 'app-score-to-beat',
  templateUrl: './score-to-beat.component.html',
  styleUrls: ['./score-to-beat.component.scss'],
})
export class ScoreToBeatComponent
  implements TickerItemComponent, AfterViewInit
{
  ngAfterViewInit() {
    const elements = document.getElementsByClassName('fit-text');
    fitterText(elements);
  }
}
