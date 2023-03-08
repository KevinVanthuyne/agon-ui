import AbstractDivision from './abstract-division';

export default interface PeriodDivision extends AbstractDivision {
  startDateTime: Date;
  endDateTime: Date;
}
