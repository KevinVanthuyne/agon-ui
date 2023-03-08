import { AbstractCompetition } from './abstract-competition';
import PeriodDivision from '../division/period-division';

export default class PeriodCompetition extends AbstractCompetition<PeriodDivision> {
  constructor(id: number, divisions: PeriodDivision[]) {
    super(id, divisions);
  }
}
