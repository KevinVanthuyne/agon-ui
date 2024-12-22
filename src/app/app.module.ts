import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ScoreCardComponent } from './components/score-card/score-card.component';
import { LeaderboardPageComponent } from './pages/leaderboard-page/leaderboard-page.component';
import { TickerPageComponent } from './pages/ticker-page/ticker-page.component';
import { TickerDirective } from './directives/ticker.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TickerItemContainerComponent } from './components/ticker-item-container/ticker-item-container.component';
import { CompetitionQrCodeComponent } from './pages/ticker-items/competition-qr-code/competition-qr-code.component';
// import { QRCodeModule } from 'angular2-qrcode';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from './components/footer/footer.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { XhrInterceptor } from './interceptors/xhr-interceptor';
import { HttpRequestInterceptor } from './interceptors/http-request-interceptor';
import { AdminGamesPageComponent } from './pages/admin/games/admin-games-page/admin-games-page.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { ROUTES } from './app.routing';
import { MatTableModule } from '@angular/material/table';
import { ScoresPageComponent } from './pages/admin/scores-page/scores-page.component';
import { MatIconModule } from '@angular/material/icon';
import { DivisionsPageComponent } from './pages/admin/divisions/divisions-page/divisions-page.component';
import { NewDivisionPageComponent } from './pages/admin/divisions/new-division-page/new-division-page.component';
import { NewGamePageComponent } from './pages/admin/games/new-game-page/new-game-page.component';
import { EditGameStylePageComponent } from './pages/admin/game-styles/edit-game-style-page/edit-game-style-page.component';
import { LinkComponent } from './components/link/link.component';
import { DivisionChampionComponent } from './pages/ticker-items/division-champion/division-champion.component';
import { MatSortModule } from '@angular/material/sort';
import { EditGamePageComponent } from './pages/admin/games/edit-game-page/edit-game-page.component';
import { GameHeaderImageComponent } from './pages/ticker-items/game-header-image/game-header-image.component';
import { OvertinkerComponent } from './pages/ticker-items/overtinker/overtinker.component';
import { RunnerUpsComponent } from './pages/ticker-items/runner-ups/runner-ups.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameDetailPageComponent } from './pages/game-detail-page/game-detail-page.component';
import { GameLeaderboardComponent } from './components/game-leaderboard/game-leaderboard.component';
import { MatCard, MatCardContent } from '@angular/material/card';
import { H2Component } from './components/headings/h2/h2.component';
import { H3Component } from './components/headings/h3/h3.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { ReportIssuePageComponent } from './pages/issues/report-issue-page/report-issue-page.component';
import { RouterModule } from '@angular/router';
import { AdminIssuesPageComponent } from './pages/admin/admin-issues-page/admin-issues-page.component';
import { LeaderboardComponent } from './pages/ticker-items/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreCardComponent,
    LeaderboardPageComponent,
    TickerPageComponent,
    TickerDirective,
    TickerItemContainerComponent,
    CompetitionQrCodeComponent,
    PageContainerComponent,
    HighScoreLeaderboardPageComponent,
    PeriodLeaderboardPageComponent,
    DivisionColumnsComponent,
    DivisionColumnComponent,
    ScorePageComponent,
    NavBarComponent,
    FooterComponent,
    LoginPageComponent,
    AdminGamesPageComponent,
    AdminPageComponent,
    ScoresPageComponent,
    DivisionsPageComponent,
    NewDivisionPageComponent,
    NewGamePageComponent,
    EditGameStylePageComponent,
    LinkComponent,
    DivisionChampionComponent,
    EditGamePageComponent,
    GameHeaderImageComponent,
    OvertinkerComponent,
    RunnerUpsComponent,
    GamesPageComponent,
    GameCardComponent,
    GameDetailPageComponent,
    GameLeaderboardComponent,
    ReportIssuePageComponent,
    AdminIssuesPageComponent,
    LeaderboardComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatToolbarModule,
    NgbModule,
    // QRCodeModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    FormsModule,
    MatIconModule,
    MatSortModule,
    MatCard,
    MatCardContent,
    H2Component,
    H3Component,
    TruncatePipe,
    MatChipSet,
    MatChip,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
