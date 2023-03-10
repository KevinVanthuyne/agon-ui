import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ScoreService } from '../../services/score.service';
import { Observable } from 'rxjs';
import { HighScoreCompetitionService } from '../../services/competition/high-score-competition.service';
import HighScoreDivision from '../../models/division/high-score-division';

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
    private competitionService: HighScoreCompetitionService
  ) {}

  get divisions$(): Observable<HighScoreDivision[]> {
    return this.competitionService.allDivisions$;
  }

  onSubmit(): void {
    console.log(this.form);
    this.scoreService
      .addScore$({
        divisionId: this.form.value.divisionId!,
        username: this.form.value.username!,
        points: this.form.value.points!,
      })
      .subscribe({
        next: (n) => {
          console.log('next', n);
          this.formDirective?.resetForm();
          this.form.reset();
        },
        error: (e) => console.error(e),
      });
  }
}
