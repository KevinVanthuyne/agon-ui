import AbstractDivision from './abstract-division';
import Game from '../game';
import Score from '../score';

export default class PeriodDivision extends AbstractDivision {
  startDateTime: Date;
  endDateTime: Date;

  constructor(
    id: number,
    game: Game,
    scores: Score[],
    startDateTime: Date,
    endDateTime: Date
  ) {
    super(id, game, scores);
    this.startDateTime = startDateTime;
    this.endDateTime = endDateTime;
  }
}
