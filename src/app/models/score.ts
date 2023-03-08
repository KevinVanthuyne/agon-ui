export default class Score {
  uuid: string;
  userId: string;
  gameId: string;
  points: string;

  constructor(uuid: string, userId: string, gameId: string, points: string) {
    this.uuid = uuid;
    this.userId = userId;
    this.gameId = gameId;
    this.points = points;
  }
}
