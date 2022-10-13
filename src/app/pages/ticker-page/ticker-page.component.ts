import {
  AfterViewInit,
  Component,
  OnDestroy,
  Type,
  ViewChild,
} from '@angular/core';
import { TickerDirective } from '../../directives/ticker.directive';
import { TickerItemComponent } from '../ticker-items/ticker-item.component';
import { GameOfTheMonthComponent } from '../ticker-items/game-of-the-month/game-of-the-month.component';
import { ScoreToBeatComponent } from '../ticker-items/score-to-beat/score-to-beat.component';
import { GameImageComponent } from '../ticker-items/game-image/game-image.component';
import { RunnerUpScoresComponent } from '../ticker-items/runner-up-scores/runner-up-scores.component';
import { CompetitionQrCodeComponent } from '../ticker-items/competition-qr-code/competition-qr-code.component';
import { WinPrizesComponent } from '../ticker-items/win-prizes/win-prizes.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ticker-page',
  templateUrl: './ticker-page.component.html',
  styleUrls: ['./ticker-page.component.scss'],
})
export class TickerPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild(TickerDirective, { static: true }) tickerHost!: TickerDirective;
  currentIndex = -1;
  interval: number | undefined;
  components: Type<TickerItemComponent>[] = [
    GameOfTheMonthComponent,
    GameImageComponent,
    ScoreToBeatComponent,
    RunnerUpScoresComponent,
    WinPrizesComponent,
    CompetitionQrCodeComponent,
  ];

  ngAfterViewInit() {
    this.loadComponent();
    this.setupInterval();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentIndex = (this.currentIndex + 1) % this.components.length;
    const tickerItemComponent = this.components[this.currentIndex];

    const viewContainerRef = this.tickerHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<TickerItemComponent>(
        tickerItemComponent
      );
    componentRef.changeDetectorRef.detectChanges();
  }

  setupInterval() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, environment.tickerPageInterval);
  }
}
