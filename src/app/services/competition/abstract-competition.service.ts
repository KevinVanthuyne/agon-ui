import { CachingService } from '../caching-service';
import { OnDestroy } from '@angular/core';
import AbstractDivision from '../../models/division/abstract-division';
import { AbstractCompetition } from '../../models/competition/abstract-competition';
import { Observable, shareReplay, switchMap, takeUntil, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export default abstract class AbstractCompetitionService<
    Div extends AbstractDivision,
    Comp extends AbstractCompetition<Div>
  >
  extends CachingService
  implements OnDestroy
{
  private divisionCache$: Observable<Div[]> | undefined;
  private readonly competitionUrl: string;

  protected constructor(competitionUrl: string, protected http: HttpClient) {
    super();
    this.competitionUrl = competitionUrl;
  }

  get allDivisions$(): Observable<Div[]> {
    if (this.divisionCache$) return this.divisionCache$;

    this.divisionCache$ = timer(
      0,
      AbstractCompetitionService.REFRESH_INTERVAL
    ).pipe(
      switchMap(() => this.http.get<Div[]>(`${this.competitionUrl}/divisions`)),
      takeUntil(this.destroy$),
      shareReplay(1)
    );
    return this.divisionCache$;
  }
}
