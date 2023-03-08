import { Injectable } from '@angular/core';
import AbstractCompetitionService from './abstract-competition.service';
import PeriodDivision from '../../models/division/period-division';
import PeriodCompetition from '../../models/competition/period-competition';

@Injectable({
  providedIn: 'root',
})
export class PeriodCompetitionService extends AbstractCompetitionService<
  PeriodDivision,
  PeriodCompetition
> {
  constructor() {
    super();
  }
}
