import { AbstractCompetition } from './abstract-competition';
import HighScoreDivision from '../division/high-score-division';

export default interface HighScoreCompetition
  extends AbstractCompetition<HighScoreDivision> {}
