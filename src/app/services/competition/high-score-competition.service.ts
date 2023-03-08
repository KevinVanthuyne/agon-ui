import { Injectable, OnDestroy } from '@angular/core';
import AbstractCompetitionService from './abstract-competition.service';
import HighScoreDivision from '../../models/division/high-score-division';
import HighScoreCompetition from '../../models/competition/high-score-competition';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url.service';

@Injectable({
  providedIn: 'root',
})
export class HighScoreCompetitionService
  extends AbstractCompetitionService<HighScoreDivision, HighScoreCompetition>
  implements OnDestroy
{
  constructor(http: HttpClient) {
    super(UrlService.URLS.competitions.highScore, http);
  }
}
