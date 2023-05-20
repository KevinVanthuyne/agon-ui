import { Component, OnInit } from '@angular/core';
import Score from 'src/app/models/score';
import { TickerItemComponent } from '../ticker-item.component';

@Component({
  selector: 'app-runner-ups',
  templateUrl: './runner-ups.component.html',
  styleUrls: ['./runner-ups.component.scss'],
})
export class RunnerUpsComponent extends TickerItemComponent implements OnInit {
  score1: Score | undefined;
  score2: Score | undefined;

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (!this.data?.division?.scores) return;

    const scores = this.data.division.scores;

    this.score1 = scores.length >= 2 ? scores[1] : undefined;
    this.score2 = scores.length >= 3 ? scores[2] : undefined;
  }
}
