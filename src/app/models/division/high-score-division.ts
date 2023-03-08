import AbstractDivision from './abstract-division';
import Game from '../game';
import Score from '../score';

export default class HighScoreDivision extends AbstractDivision {
  constructor(id: number, game: Game, scores: Score[]) {
    super(id, game, scores);
  }
}
