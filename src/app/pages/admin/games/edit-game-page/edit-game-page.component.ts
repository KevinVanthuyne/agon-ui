import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GameService } from '../../../../services/game.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-edit-game-page',
  templateUrl: './edit-game-page.component.html',
  styleUrls: ['./edit-game-page.component.scss'],
})
export class EditGamePageComponent implements OnInit {
  form:
    | FormGroup<{ id: FormControl<number>; name: FormControl<string> }>
    | undefined;

  constructor(
    private fb: FormBuilder,
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
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
        });
      });
  }

  onSubmit() {
    const game = this.form!.getRawValue();
    this.gameService
      .editGame$(game.id, game.name)
      .subscribe(() => this.router.navigate(['/admin/games']));
  }
}
