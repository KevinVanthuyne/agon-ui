import { Routes } from '@angular/router';
import { LeaderboardPageComponent } from './pages/leaderboard-page/leaderboard-page.component';
import { PeriodLeaderboardPageComponent } from './pages/leaderboards/period-leaderboard-page/period-leaderboard-page.component';
import { HighScoreLeaderboardPageComponent } from './pages/leaderboards/high-score-leaderboard-page/high-score-leaderboard-page.component';
import { ScorePageComponent } from './pages/score-page/score-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { AdminGamesPageComponent } from './pages/admin/games/admin-games-page/admin-games-page.component';
import { TickerPageComponent } from './pages/ticker-page/ticker-page.component';
import { CompetitionQrCodeComponent } from './pages/ticker-items/competition-qr-code/competition-qr-code.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ScoresPageComponent } from './pages/admin/scores-page/scores-page.component';
import { DivisionsPageComponent } from './pages/admin/divisions/divisions-page/divisions-page.component';
import { NewDivisionPageComponent } from './pages/admin/divisions/new-division-page/new-division-page.component';
import { NewGamePageComponent } from './pages/admin/games/new-game-page/new-game-page.component';
import { EditGameStylePageComponent } from './pages/admin/game-styles/edit-game-style-page/edit-game-style-page.component';
import { EditGamePageComponent } from './pages/admin/games/edit-game-page/edit-game-page.component';
import { OvertinkerComponent } from './pages/ticker-items/overtinker/overtinker.component';
import {GamesPageComponent} from "./pages/games-page/games-page.component";

export const ROUTES: Routes = [
  { path: 'games', component: GamesPageComponent},
  {
    path: 'leaderboard',
    component: LeaderboardPageComponent,
    children: [
      { path: '', redirectTo: 'high-score', pathMatch: 'full' },
      { path: 'high-score', component: HighScoreLeaderboardPageComponent },
      { path: 'period', component: PeriodLeaderboardPageComponent },
    ],
  },
  { path: 'score', component: ScorePageComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'divisions', pathMatch: 'full' },
      { path: 'divisions', component: DivisionsPageComponent },
      { path: 'games', component: AdminGamesPageComponent },
      { path: 'game-style/:id', component: EditGameStylePageComponent },
      { path: 'game/:id', component: EditGamePageComponent },
      { path: 'new-game', component: NewGamePageComponent },
      { path: 'scores', component: ScoresPageComponent },
      { path: 'new-division', component: NewDivisionPageComponent },
    ],
  },
  { path: 'ticker', component: TickerPageComponent },
  { path: 'ticker/1', component: CompetitionQrCodeComponent },
  { path: 'ticker/2', component: OvertinkerComponent },
  { path: '', redirectTo: '/leaderboard/high-score', pathMatch: 'full' },
  { path: '**', redirectTo: '/leaderboard/high-score', pathMatch: 'full' },
];
