import GameStyle from './game-style';

export default class Game {
  id: number;
  name: string;
  startDate: Date;
  gameStyle: GameStyle;

  constructor(id: number, name: string, startDate: Date, gameStyle: GameStyle) {
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.gameStyle = gameStyle;
  }
}
