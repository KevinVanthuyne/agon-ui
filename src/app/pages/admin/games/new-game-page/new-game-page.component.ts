import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GameService } from '../../../../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-game-page',
  templateUrl: './new-game-page.component.html',
  styleUrls: ['./new-game-page.component.scss'],
})
export class NewGamePageComponent {
  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.min(5)]],
  });

  constructor(
    private fb: FormBuilder,
    private gameService: GameService,
    private router: Router
  ) {}

  onSubmit() {
    this.gameService
      .addGame$(this.form.value.name!)
      .subscribe(() => this.router.navigate(['/admin/games']));
  }
}
