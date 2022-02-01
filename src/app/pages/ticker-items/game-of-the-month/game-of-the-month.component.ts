import { AfterViewInit, Component } from '@angular/core';
import { TickerItemComponent } from '../ticker-item.component';
import { GameService } from '../../../services/game.service';
import { Observable } from 'rxjs';
import Game from '../../../models/game';
import { Marquee } from 'dynamic-marquee';

@Component({
  selector: 'app-game-of-the-month',
  templateUrl: './game-of-the-month.component.html',
  styleUrls: ['./game-of-the-month.component.scss'],
})
export class GameOfTheMonthComponent
  implements TickerItemComponent, AfterViewInit
{
  constructor(private gameService: GameService) {}

  ngAfterViewInit(): void {
    const marquee = new Marquee(document.getElementById('marquee')!, {
      rate: -300,
    });
    marquee.appendItem('White water');
    marquee.onAllItemsRemoved(() => {
      marquee.appendItem('White water');
    });
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
