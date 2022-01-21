export default class HighScore {
  rank: number;
  username: string;
  initials: string;
  userId: string;
  score: string;

  constructor(
    rank: number,
    username: string,
    initials: string,
    userId: string,
    score: string
  ) {
    this.rank = rank;
    this.username = username;
    this.initials = initials;
    this.userId = userId;
    this.score = score;
  }
}
