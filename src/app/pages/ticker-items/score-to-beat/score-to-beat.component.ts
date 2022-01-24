import { AfterViewInit, Component } from '@angular/core';
import { TickerItemComponent } from '../ticker-item.component';
import fitty, { FittyInstance } from 'fitty';

@Component({
  selector: 'app-score-to-beat',
  templateUrl: './score-to-beat.component.html',
  styleUrls: ['./score-to-beat.component.scss'],
})
export class ScoreToBeatComponent
  implements TickerItemComponent, AfterViewInit
{
  fits: FittyInstance | undefined;

  ngAfterViewInit() {
    const score: HTMLElement = document.getElementById('score')!;
    this.fits = fitty(score, { minSize: 50, maxSize: 300 });
    this.fits.fit();
  }
}
