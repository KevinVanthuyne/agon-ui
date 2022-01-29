import { AfterViewInit, Component } from '@angular/core';
import { TickerItemComponent } from '../ticker-item.component';
import * as textFit from 'textfit';

@Component({
  selector: 'app-score-to-beat',
  templateUrl: './score-to-beat.component.html',
  styleUrls: ['./score-to-beat.component.scss'],
})
export class ScoreToBeatComponent
  implements TickerItemComponent, AfterViewInit
{
  ngAfterViewInit() {
    const score = document.getElementById('score')!;
    const elements = document.getElementsByClassName('fit-text');

    for (let i = 0; i < elements.length; i++) {
        textFit(elements.item(i) as HTMLElement , {maxFontSize: 1000, alignHoriz: true});
    }
  }
}
