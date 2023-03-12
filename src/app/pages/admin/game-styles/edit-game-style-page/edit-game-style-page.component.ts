import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
      }>
    | undefined;

  constructor(
    private route: ActivatedRoute,
    private gameStyleService: GameStyleService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.gameStyleService.get$(Number.parseInt(params.get('id')!)!)
        )
      )
      .subscribe((style) => {
        console.log(style);
        this.form = this.fb.nonNullable.group({
          gameId: [style.gameId],
          backgroundImage: [style.backgroundImage],
          backgroundColor: [style.backgroundColor],
          headerImage: [style.headerImage],
          borderColor: [style.borderColor],
          fontColor: [style.fontColor],
        });
      });
  }

  onSubmit() {}
}
