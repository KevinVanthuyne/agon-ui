import { CachingService } from '../caching-service';
import { OnDestroy } from '@angular/core';
import AbstractDivision from '../../models/division/abstract-division';
import { AbstractCompetition } from '../../models/competition/abstract-competition';

export default abstract class AbstractCompetitionService<
    Div extends AbstractDivision,
    Comp extends AbstractCompetition<Div>
  >
  extends CachingService
  implements OnDestroy
{
  protected constructor() {
    super();
  }
}
