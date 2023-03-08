import Game from '../game';
import Score from '../score';

export default abstract class AbstractDivision {
  id: number;
  game: Game;
  scores: Score[];

  protected constructor(id: number, game: Game, scores: Score[]) {
    this.id = id;
    this.game = game;
    this.scores = scores;
  }
}
