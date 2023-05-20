import { Component, OnInit } from '@angular/core';
import Score from 'src/app/models/score';
import { TickerItemComponent } from '../ticker-item.component';
import { Observable } from 'rxjs';
import { ScoreService } from '../../../services/score.service';

@Component({
  selector: 'app-runner-ups',
  templateUrl: './runner-ups.component.html',
  styleUrls: ['./runner-ups.component.scss'],
})
export class RunnerUpsComponent extends TickerItemComponent implements OnInit {
  currentTopScores$: Observable<Score[]> | undefined;

  constructor(private scoreService: ScoreService) {
    super();
  }

  ngOnInit(): void {
    if (!this.data?.division) return;

    this.currentTopScores$ = this.scoreService.getHighestScores$(
      this.data!.division!.id
    );
  }
}
