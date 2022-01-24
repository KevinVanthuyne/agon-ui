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

const appRoutes: Routes = [
  { path: 'leaderboard', component: LeaderboardPageComponent },
  { path: 'ticker', component: TickerPageComponent },
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
