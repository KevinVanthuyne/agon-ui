import { Component, OnInit } from '@angular/core';
import { TickerItemComponent } from '../ticker-item.component';

@Component({
  selector: 'app-score-to-beat',
  templateUrl: './score-to-beat.component.html',
  styleUrls: ['./score-to-beat.component.scss'],
})
export class ScoreToBeatComponent implements TickerItemComponent, OnInit {
  constructor() {}

  ngOnInit(): void {}
}
