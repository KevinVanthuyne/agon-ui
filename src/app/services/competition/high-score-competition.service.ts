import { Injectable, OnDestroy } from '@angular/core';
import AbstractCompetitionService from './abstract-competition.service';
import HighScoreDivision from '../../models/division/high-score-division';
import HighScoreCompetition from '../../models/competition/high-score-competition';

@Injectable({
  providedIn: 'root',
})
export class HighScoreCompetitionService
  extends AbstractCompetitionService<HighScoreDivision, HighScoreCompetition>
  implements OnDestroy
{
  constructor() {
    super();
  }
}
