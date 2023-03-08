import Game from '../game';
import Score from '../score';

export default interface AbstractDivision {
  id: number;
  game: Game;
  scores: Score[];
}
