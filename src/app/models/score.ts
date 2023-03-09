import User from './user';

export default interface Score {
  id: string;
  points: string;
  user: User;
}
