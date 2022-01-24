import { Component, OnInit } from '@angular/core';
import { TickerItemComponent } from '../ticker-item.component';

@Component({
  selector: 'app-game-of-the-month',
  templateUrl: './game-of-the-month.component.html',
  styleUrls: ['./game-of-the-month.component.scss'],
})
export class GameOfTheMonthComponent implements TickerItemComponent, OnInit {
  constructor() {}

  ngOnInit(): void {}
}
