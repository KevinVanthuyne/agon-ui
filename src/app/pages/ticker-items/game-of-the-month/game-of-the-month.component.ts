import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { TickerItemComponent } from '../ticker-item.component';
import { GameService } from '../../../services/game.service';
import { Observable, Subscription } from 'rxjs';
import Game from '../../../models/game';
import { Marquee } from 'dynamic-marquee';

@Component({
  selector: 'app-game-of-the-month',
  templateUrl: './game-of-the-month.component.html',
  styleUrls: ['./game-of-the-month.component.scss'],
})
export class GameOfTheMonthComponent
  implements TickerItemComponent, AfterViewInit, OnDestroy
{
  private _sub = new Subscription();
  private _marquee: Marquee | undefined;

  constructor(private gameService: GameService) {}

  ngAfterViewInit(): void {
    this._marquee = new Marquee(document.getElementById('marquee')!, {
      rate: -600,
    });
    this._sub = this.gameService.activeGame$.subscribe((game) => {
      if (!this._marquee) return;
      this._marquee?.clear();
      this._marquee?.appendItem(game.name);
      this._marquee?.onAllItemsRemoved(() => {
        this._marquee?.appendItem(game.name);
      });
    });
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
    this._marquee?.clear();
  }

  get activeGame$(): Observable<Game> {
    return this.gameService.activeGame$;
    //   .pipe(
    //   finalize(() => {
    //     const marqueeElement = document.getElementById('marquee')!;
    //     const marquee = new Marquee(marqueeElement);
    //   })
    // );
  }
}
