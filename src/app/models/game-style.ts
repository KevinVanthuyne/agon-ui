export default class GameStyle {
  gameId: number;
  backgroundImage: string;
  backgroundColor: string;
  headerImage: string;
  borderColor: string;
  fontColor: string;

  constructor(
    gameId: number,
    backgroundImage: string,
    backgroundColor: string,
    headerImage: string,
    borderColor: string,
    fontColor: string
  ) {
    this.gameId = gameId;
    this.backgroundImage = backgroundImage;
    this.backgroundColor = backgroundColor;
    this.headerImage = headerImage;
    this.borderColor = borderColor;
    this.fontColor = fontColor;
  }
}
