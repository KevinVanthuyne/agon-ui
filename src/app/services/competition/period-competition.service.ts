import { Injectable } from '@angular/core';
import AbstractCompetitionService from './abstract-competition.service';
import PeriodDivision from '../../models/division/period-division';
import PeriodCompetition from '../../models/competition/period-competition';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url.service';

@Injectable({
  providedIn: 'root',
})
export class PeriodCompetitionService extends AbstractCompetitionService<
  PeriodDivision,
  PeriodCompetition
> {
  constructor(http: HttpClient) {
    super(UrlService.URLS.competitions.period, http);
  }
}
