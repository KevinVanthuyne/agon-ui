import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { GameStyleService } from '../../../../services/game-style.service';
import GameStyle from '../../../../models/game-style';

@Component({
  selector: 'app-edit-game-style-page',
  templateUrl: './edit-game-style-page.component.html',
  styleUrls: ['./edit-game-style-page.component.scss'],
})
export class EditGameStylePageComponent implements OnInit {
  protected gameStyle$: Observable<GameStyle> | undefined;

  constructor(
    private route: ActivatedRoute,
    private gameStyleService: GameStyleService
  ) {}

  ngOnInit(): void {
    this.gameStyle$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.gameStyleService.get$(Number.parseInt(params.get('id')!)!)
      )
    );
  }
}
