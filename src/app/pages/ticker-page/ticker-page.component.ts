import {
  AfterViewInit,
  Component,
  OnDestroy,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TickerDirective } from '../../directives/ticker.directive';
import { TickerItemComponent } from '../ticker-items/ticker-item.component';
import { CompetitionQrCodeComponent } from '../ticker-items/competition-qr-code/competition-qr-code.component';
import { environment } from '../../../environments/environment';
import AbstractDivision from '../../models/division/abstract-division';
import { HighScoreCompetitionService } from '../../services/competition/high-score-competition.service';
import { DivisionChampionComponent } from '../ticker-items/division-champion/division-champion.component';
import { Subscription, take, tap } from 'rxjs';
import { GameHeaderImageComponent } from '../ticker-items/game-header-image/game-header-image.component';
import { OvertinkerComponent } from '../ticker-items/overtinker/overtinker.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticker-page',
  templateUrl: './ticker-page.component.html',
  styleUrls: ['./ticker-page.component.scss'],
})
export class TickerPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild(TickerDirective, { static: true }) tickerHost!: TickerDirective;
  currentIndex = 0;
  currentComponentIndex = 0;
  currentDivisionIndex = 0;
  redirectToLeaderboard = false;
  interval: number | undefined;
  sub = new Subscription();
  // Only a single instance exists of these components
  uniqueComponentTypes: Type<TickerItemComponent>[] = [
    OvertinkerComponent,
    CompetitionQrCodeComponent,
  ];
  // An instance of these components exist for each division
  componentTypesPerDivision: Type<TickerItemComponent>[] = [
    GameHeaderImageComponent,
    DivisionChampionComponent,
    // RunnerUpsComponent,
  ];
  // TODO only supports high score divisions currently
  divisions: AbstractDivision[] = [];

  constructor(
    private competitionService: HighScoreCompetitionService,
    private router: Router
  ) {}

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
      .subscribe((divisions) => {
        if (this.redirectToLeaderboard) {
          void this.router.navigate(['leaderboard'], {
            queryParams: { redirect: 'ticker' },
          });
        }

        const viewContainerRef = this.tickerHost.viewContainerRef;
        viewContainerRef.clear();

        console.log(
          'i:',
          this.currentIndex,
          'd:',
          this.currentDivisionIndex,
          'c:',
          this.currentComponentIndex
        );

        if (this.currentIndex < this.uniqueComponentTypes.length) {
          this.createUniqueComponent(viewContainerRef);
          this.currentIndex++;
        } else {
          // handle components per division
          if (this.currentDivisionIndex < divisions.length) {
            this.createComponentForDivision(
              viewContainerRef,
              divisions[this.currentDivisionIndex]
            );
            if (this.currentDivisionIndex === divisions.length) {
              this.currentIndex = 0;
              this.currentDivisionIndex = 0;
              this.redirectToLeaderboard = true;
            }
          }
        }
      });
  }

  private createComponentForDivision(
    viewContainerRef: ViewContainerRef,
    division: AbstractDivision
  ) {
    const componentTypeToCreate =
      this.componentTypesPerDivision[this.currentComponentIndex];
    const componentRef = viewContainerRef.createComponent<TickerItemComponent>(
      componentTypeToCreate
    );
    componentRef.instance.data = { division };
    componentRef.changeDetectorRef.detectChanges();

    if (
      this.currentComponentIndex <
      this.componentTypesPerDivision.length - 1
    ) {
      this.currentComponentIndex++;
    } else {
      this.currentComponentIndex = 0;
      this.currentDivisionIndex++;
    }
  }

  private createUniqueComponent(viewContainerRef: ViewContainerRef) {
    const componentTypeToCreate = this.uniqueComponentTypes[this.currentIndex];
    viewContainerRef.createComponent<TickerItemComponent>(
      componentTypeToCreate
    );
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
