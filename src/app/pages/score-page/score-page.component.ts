import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.scss'],
})
export class ScorePageComponent {
  form = this.fb.nonNullable.group({
    divisionId: [1, [Validators.required, Validators.min(1)]],
    username: ['Test', [Validators.required, Validators.minLength(3)]],
    points: [
      '1000',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[0-9]+$/),
      ],
    ],
  });

  constructor(private fb: FormBuilder, private scoreService: ScoreService) {}

  onSubmit(): void {
    this.scoreService
      .addScore$({
        divisionId: this.form.value.divisionId!,
        username: this.form.value.username!,
        points: this.form.value.points!,
      })
      .subscribe({
        next: (n) => {
          console.log('next', n);
          this.form.reset();
        },
        error: (e) => console.error(e),
      });
  }
}
