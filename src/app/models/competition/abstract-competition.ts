import AbstractDivision from '../division/abstract-division';

export abstract class AbstractCompetition<Div extends AbstractDivision> {
  id: number;
  divisions: Div[];

  protected constructor(id: number, divisions: Div[]) {
    this.id = id;
    this.divisions = divisions;
  }
}
