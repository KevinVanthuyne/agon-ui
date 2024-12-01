import GameStyle from './game-style';
import { GameStatus } from './game-status';
import { GameCategory } from './game-category';

export default interface Game {
  id: number;
  name: string;
  description: string;
  howToPlay: string;
  collectionHistory: string;
  gameStyle: GameStyle;
  status: GameStatus;
  category: GameCategory;
  year: number;
}

export function showGame(game: Game): boolean {
  return game.status === GameStatus.ON_LOCATION;
}
