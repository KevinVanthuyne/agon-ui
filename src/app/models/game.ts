import GameStyle from './game-style';

export default interface Game {
  id: number;
  name: string;
  startDate: Date;
  gameStyle: GameStyle;
}
