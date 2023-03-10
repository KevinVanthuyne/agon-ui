import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ScoreService } from '../../services/score.service';
import { Observable } from 'rxjs';
import { HighScoreCompetitionService } from '../../services/competition/high-score-competition.service';
import HighScoreDivision from '../../models/division/high-score-division';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Page with a form to submit a score. Does not implement any kind of authentication to provide quick and public input.
 * Only supports the {@link HighScoreDivision} for now.
 */
@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.scss'],
})
export class ScorePageComponent {
  @ViewChild('formDirective') private formDirective: NgForm | undefined;

  formError: string | undefined;
  form = this.fb.nonNullable.group({
    divisionId: [0, [Validators.required, Validators.min(1)]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    points: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^[0-9]+$/),
      ],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private scoreService: ScoreService,
    private competitionService: HighScoreCompetitionService,
    private snackBar: MatSnackBar
  ) {}

  get divisions$(): Observable<HighScoreDivision[]> {
    return this.competitionService.allDivisions$;
  }

  onSubmit(): void {
    this.scoreService
      .addScore$({
        divisionId: this.form.value.divisionId!,
        username: this.form.value.username!,
        points: this.form.value.points!,
      })
      .subscribe({
        next: () => {
          this.formDirective?.resetForm();
          this.form.reset();
          this.formError = undefined;
          this.snackBar.open('Score submitted!', 'Dismiss', { duration: 3000 });
        },
        error: (response) => {
          this.formError = response.error;
        },
      });
  }
}
