import AbstractDivision from './abstract-division';
import Score from '../score';

export default class PeriodDivision extends AbstractDivision {
  startDateTime: Date;
  endDateTime: Date;

  constructor(
    id: number,
    gameId: number,
    scores: Score[],
    startDateTime: Date,
    endDateTime: Date
  ) {
    super(id, gameId);
    this.startDateTime = startDateTime;
    this.endDateTime = endDateTime;
  }
}
