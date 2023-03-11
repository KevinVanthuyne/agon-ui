import { Routes } from '@angular/router';
import { LeaderboardPageComponent } from './pages/leaderboard-page/leaderboard-page.component';
import { PeriodLeaderboardPageComponent } from './pages/leaderboards/period-leaderboard-page/period-leaderboard-page.component';
import { HighScoreLeaderboardPageComponent } from './pages/leaderboards/high-score-leaderboard-page/high-score-leaderboard-page.component';
import { ScorePageComponent } from './pages/score-page/score-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { GamesPageComponent } from './pages/admin/games-page/games-page.component';
import { TickerPageComponent } from './pages/ticker-page/ticker-page.component';
import { GameOfTheMonthComponent } from './pages/ticker-items/game-of-the-month/game-of-the-month.component';
import { GameImageComponent } from './pages/ticker-items/game-image/game-image.component';
import { ScoreToBeatComponent } from './pages/ticker-items/score-to-beat/score-to-beat.component';
import { RunnerUpScoresComponent } from './pages/ticker-items/runner-up-scores/runner-up-scores.component';
import { WinPrizesComponent } from './pages/ticker-items/win-prizes/win-prizes.component';
import { CompetitionQrCodeComponent } from './pages/ticker-items/competition-qr-code/competition-qr-code.component';
import { AuthGuardService } from './services/auth-guard.service';

export const ROUTES: Routes = [
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
    canActivate: [AuthGuardService],
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