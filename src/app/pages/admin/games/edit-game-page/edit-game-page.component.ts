import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GameService } from '../../../../services/game.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { GameStatus } from '../../../../models/game-status';
import { GameCategory } from '../../../../models/game-category';

interface EditGameForm {
  id: FormControl<number>;
  name: FormControl<string>;
  description: FormControl<string>;
  collectionHistory: FormControl<string>;
  year: FormControl<number>;
  status: FormControl<GameStatus>;
  category: FormControl<GameCategory>;
}

@Component({
  selector: 'app-edit-game-page',
  templateUrl: './edit-game-page.component.html',
  styleUrls: ['./edit-game-page.component.scss'],
})
export class EditGamePageComponent implements OnInit {
  protected GameCategory = GameCategory;
  protected GameStatus = GameStatus;
  protected form: FormGroup<EditGameForm> | undefined;

  constructor(
    private readonly fb: FormBuilder,
    private readonly gameService: GameService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.gameService.get$(Number.parseInt(params.get('id')!)!)
        )
      )
      .subscribe((game) => {
        console.log(game);
        this.form = this.fb.nonNullable.group({
          id: [{ value: game.id, disabled: true }],
          name: [game.name],
          description: [game.description],
          collectionHistory: [game.collectionHistory],
          year: [game.year],
          status: [game.status],
          category: [game.category],
        });
      });
  }

  get categories(): GameCategory[] {
    return [GameCategory.ARCADE, GameCategory.PINBALL];
  }

  get statuses(): GameStatus[] {
    return [
      GameStatus.UNKNOWN,
      GameStatus.IN_STORAGE,
      GameStatus.LIVE,
      GameStatus.BROKEN,
      GameStatus.UNDER_REPAIR,
    ];
  }

  onSubmit() {
    const game = this.form!.getRawValue();
    this.gameService
      .editGame$(game)
      .subscribe(() => this.router.navigate(['/admin/games']));
  }
}
