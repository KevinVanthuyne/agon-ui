import {
  AfterViewInit,
  Component,
  OnDestroy,
  Type,
  ViewChild,
} from '@angular/core';
import { TickerDirective } from '../../directives/ticker.directive';
import { TickerItemComponent } from '../ticker-items/ticker-item.component';
import { CompetitionQrCodeComponent } from '../ticker-items/competition-qr-code/competition-qr-code.component';
import { environment } from '../../../environments/environment';
import AbstractDivision from '../../models/division/abstract-division';
import { HighScoreCompetitionService } from '../../services/competition/high-score-competition.service';
import { DivisionChampionComponent } from '../ticker-items/division-champion/division-champion.component';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-ticker-page',
  templateUrl: './ticker-page.component.html',
  styleUrls: ['./ticker-page.component.scss'],
})
export class TickerPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild(TickerDirective, { static: true }) tickerHost!: TickerDirective;
  currentIndex = -1;
  currentDivisionIndex = -1;
  interval: number | undefined;
  components: Type<TickerItemComponent>[] = [
    // GameOfTheMonthComponent,
    // GameImageComponent,
    // ScoreToBeatComponent,
    // RunnerUpScoresComponent,
    DivisionChampionComponent,
    CompetitionQrCodeComponent,
  ];
  // TODO only supports high score divisions currently
  divisions: AbstractDivision[] = [];

  constructor(private competitionService: HighScoreCompetitionService) {}

  ngAfterViewInit() {
    this.loadComponent();
    this.setupInterval();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  private loadComponent() {
    this.updateDivisions$()
      .pipe(take(1))
      .subscribe(() => {
        this.currentIndex = (this.currentIndex + 1) % this.components.length;
        const tickerItemComponent = this.components[this.currentIndex];

        const viewContainerRef = this.tickerHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef =
          viewContainerRef.createComponent<TickerItemComponent>(
            tickerItemComponent
          );

        // Cycle through all divisions before advancing to the next component type
        if (tickerItemComponent === DivisionChampionComponent) {
          this.currentDivisionIndex =
            (this.currentDivisionIndex + 1) % this.divisions.length;

          componentRef.instance.data = {
            division: this.divisions[this.currentDivisionIndex],
          };

          if (this.currentDivisionIndex < this.divisions.length - 1) {
            // next component should also be a DivChampComponent because there are still more divisions
            this.currentIndex--;
          } else {
            // looped over all divisions, move on to other component types
            this.currentDivisionIndex = -1;
          }
        }

        componentRef.changeDetectorRef.detectChanges();
      });
  }

  private updateDivisions$() {
    return this.competitionService.allDivisionsOnce$.pipe(
      tap((divisions) => {
        this.divisions = divisions;
      })
    );
  }

  private setupInterval() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, environment.tickerPageInterval);
  }
}
