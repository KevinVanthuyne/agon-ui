import GameStyle from './game-style';

export default interface Game {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  gameStyle: GameStyle;
}
