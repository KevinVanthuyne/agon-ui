export default abstract class AbstractDivision {
  id: number;
  gameId: number;

  protected constructor(id: number, gameId: number) {
    this.id = id;
    this.gameId = gameId;
  }
}
