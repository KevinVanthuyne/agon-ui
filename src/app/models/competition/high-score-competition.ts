import { AbstractCompetition } from './abstract-competition';
import HighScoreDivision from '../division/high-score-division';

export default class HighScoreCompetition extends AbstractCompetition<HighScoreDivision> {
  constructor(id: number, divisions: HighScoreDivision[]) {
    super(id, divisions);
  }
}
