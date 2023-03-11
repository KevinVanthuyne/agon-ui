import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ScoreCardComponent } from './components/score-card/score-card.component';
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
import { HighScoreLeaderboardPageComponent } from './pages/leaderboards/high-score-leaderboard-page/high-score-leaderboard-page.component';
import { PeriodLeaderboardPageComponent } from './pages/leaderboards/period-leaderboard-page/period-leaderboard-page.component';
import { DivisionColumnsComponent } from './components/division-columns/division-columns.component';
import { DivisionColumnComponent } from './components/division-column/division-column.component';
import { ScorePageComponent } from './pages/score-page/score-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from './components/footer/footer.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { XhrInterceptor } from './interceptors/xhr-interceptor';
import { HttpRequestInterceptor } from './interceptors/http-request-interceptor';
import { GamesPageComponent } from './pages/admin/games-page/games-page.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';

const appRoutes: Routes = [
  {
    path: 'leaderboard',
    component: LeaderboardPageComponent,
    children: [
      { path: '', redirectTo: 'period', pathMatch: 'full' },
      { path: 'period', component: PeriodLeaderboardPageComponent },
      { path: 'high-score', component: HighScoreLeaderboardPageComponent },
    ],
  },
  { path: 'score', component: ScorePageComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      { path: '', redirectTo: 'games', pathMatch: 'full' },
      { path: 'games', component: GamesPageComponent },
    ],
  },
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
    ScoreCardComponent,
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
    HighScoreLeaderboardPageComponent,
    PeriodLeaderboardPageComponent,
    DivisionColumnsComponent,
    DivisionColumnComponent,
    ScorePageComponent,
    NavBarComponent,
    FooterComponent,
    LoginPageComponent,
    GamesPageComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    NgbModule,
    QRCodeModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
