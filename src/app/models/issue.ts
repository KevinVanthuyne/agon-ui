import { IssueStatus } from './issue-status';

export interface Issue {
  id?: string;
  gameId: number;
  username: string;
  description: string;
  timestamp?: string;
  status?: IssueStatus;
}
