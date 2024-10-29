import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GameService } from '../../../../services/game.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';

interface EditGameForm {
  id: FormControl<number>;
  name: FormControl<string>;
  description: FormControl<string>;
}

@Component({
  selector: 'app-edit-game-page',
  templateUrl: './edit-game-page.component.html',
  styleUrls: ['./edit-game-page.component.scss'],
})
export class EditGamePageComponent implements OnInit {
  form:
    | FormGroup<EditGameForm>
    | undefined;

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
        this.form = this.fb.nonNullable.group({
          id: [{ value: game.id, disabled: true }],
          name: [game.name],
          description: [game.description]
        });
      });
  }

  onSubmit() {
    const game = this.form!.getRawValue();
    this.gameService
      .editGame$(game.id, game.name, game.description)
      .subscribe(() => this.router.navigate(['/admin/games']));
  }
}
