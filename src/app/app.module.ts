import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GameColumnComponent } from './components/game-column/game-column.component';
import { HttpClientModule } from '@angular/common/http';
import { HighScoreCardComponent } from './components/high-score-card/high-score-card.component';
import { LeaderboardPageComponent } from './pages/leaderboard-page/leaderboard-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TickerPageComponent } from './pages/ticker-page/ticker-page.component';
import { TickerDirective } from './directives/ticker.directive';
import { GameOfTheMonthComponent } from './pages/ticker-items/game-of-the-month/game-of-the-month.component';
import { ScoreToBeatComponent } from './pages/ticker-items/score-to-beat/score-to-beat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TickerItemContainerComponent } from './components/ticker-item-container/ticker-item-container.component';
import { GameImageComponent } from './pages/ticker-items/game-image/game-image.component';
import { RunnerUpScoresComponent } from './pages/ticker-items/runner-up-scores/runner-up-scores.component';
import { CompetitionQrCodeComponent } from './pages/ticker-items/competition-qr-code/competition-qr-code.component';
import { QRCodeModule } from 'angular2-qrcode';
import { WinPrizesComponent } from './pages/ticker-items/win-prizes/win-prizes.component';
import { PageContainerComponent } from './components/page-container/page-container.component';

const appRoutes: Routes = [
  { path: 'leaderboard', component: LeaderboardPageComponent },
  { path: 'ticker', component: TickerPageComponent },
  { path: 'ticker/1', component: GameOfTheMonthComponent },
  { path: 'ticker/2', component: GameImageComponent },
  { path: 'ticker/3', component: ScoreToBeatComponent },
  { path: 'ticker/4', component: RunnerUpScoresComponent },
  { path: 'ticker/5', component: WinPrizesComponent },
  { path: 'ticker/6', component: CompetitionQrCodeComponent },
  { path: '', redirectTo: '/leaderboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/leaderboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    GameColumnComponent,
    HighScoreCardComponent,
    LeaderboardPageComponent,
    TickerPageComponent,
    TickerDirective,
    GameOfTheMonthComponent,
    ScoreToBeatComponent,
    TickerItemContainerComponent,
    GameImageComponent,
    RunnerUpScoresComponent,
    CompetitionQrCodeComponent,
    WinPrizesComponent,
    PageContainerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    NgbModule,
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
