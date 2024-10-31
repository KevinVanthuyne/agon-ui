import GameStyle from './game-style';
import { GameStatus } from './game-status';
import { GameCategory } from './game-category';

export default interface Game {
  id: number;
  name: string;
  description: string;
  collectionHistory: string;
  gameStyle: GameStyle;
  status: GameStatus;
  category: GameCategory;
  year: number;
}
