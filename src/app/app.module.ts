import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ScoreCardComponent } from './components/score-card/score-card.component';
import { LeaderboardPageComponent } from './pages/leaderboard-page/leaderboard-page.component';
import { RouterModule } from '@angular/router';
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
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { FooterComponent } from './components/footer/footer.component';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { XhrInterceptor } from './interceptors/xhr-interceptor';
import { HttpRequestInterceptor } from './interceptors/http-request-interceptor';
import { GamesPageComponent } from './pages/admin/games/games-page/games-page.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { ROUTES } from './app.routing';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { ScoresPageComponent } from './pages/admin/scores-page/scores-page.component';
import { MatIconModule } from '@angular/material/icon';
import { DivisionsPageComponent } from './pages/admin/divisions/divisions-page/divisions-page.component';
import { NewDivisionPageComponent } from './pages/admin/divisions/new-division-page/new-division-page.component';
import { NewGamePageComponent } from './pages/admin/games/new-game-page/new-game-page.component';
import { EditGameStylePageComponent } from './pages/admin/game-styles/edit-game-style-page/edit-game-style-page.component';
import { LinkComponent } from './components/link/link.component';

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
    ScoresPageComponent,
    DivisionsPageComponent,
    NewDivisionPageComponent,
    NewGamePageComponent,
    EditGameStylePageComponent,
    LinkComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
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
    MatTableModule,
    FormsModule,
    MatIconModule,
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
