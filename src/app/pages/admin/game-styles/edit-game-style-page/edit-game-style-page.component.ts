import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { GameStyleService } from '../../../../services/game-style.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-game-style-page',
  templateUrl: './edit-game-style-page.component.html',
  styleUrls: ['./edit-game-style-page.component.scss'],
})
export class EditGameStylePageComponent implements OnInit {
  form:
    | FormGroup<{
        gameId: FormControl<number>;
        backgroundImage: FormControl<string>;
        backgroundColor: FormControl<string>;
        headerImage: FormControl<string>;
        borderColor: FormControl<string>;
        fontColor: FormControl<string>;
        cabinetImage: FormControl<string>;
      }>
    | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly gameStyleService: GameStyleService,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.gameStyleService.get$(Number.parseInt(params.get('id')!)!)
        )
      )
      .subscribe((style) => {
        this.form = this.fb.nonNullable.group({
          gameId: [{ value: style.gameId, disabled: true }],
          backgroundImage: [style.backgroundImage],
          backgroundColor: [style.backgroundColor],
          headerImage: [style.headerImage],
          borderColor: [style.borderColor],
          fontColor: [style.fontColor],
          cabinetImage: [style.cabinetImage]
        });
      });
  }

  onSubmit(): void {
    const gameStyle = this.form!.getRawValue();
    this.gameStyleService.update$(gameStyle).subscribe(() => {
      this.router.navigate(['/admin/games']);
    });
  }
}
