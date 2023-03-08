import AbstractDivision from '../division/abstract-division';

export interface AbstractCompetition<Div extends AbstractDivision> {
  id: number;
  divisions: Div[];
}
