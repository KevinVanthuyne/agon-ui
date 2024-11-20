import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {ScoreService} from '../../services/score.service';
import {map, Observable} from 'rxjs';
import {HighScoreCompetitionService} from '../../services/competition/high-score-competition.service';
import HighScoreDivision from '../../models/division/high-score-division';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {showGame} from '../../models/game';

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
    username: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(32)],
    ],
    // Points are a string because long does not exist in javascript
    points: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(18),
        Validators.pattern(/^[0-9]+$/),
      ],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private scoreService: ScoreService,
    private competitionService: HighScoreCompetitionService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  get divisions$(): Observable<HighScoreDivision[]> {
    return this.competitionService.allDivisions$.pipe(
      map((divisions) =>
        divisions.filter((division) => showGame(division.game))
      )
    );
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
          this.router.navigate(['/leaderboard']).then(() => {
            this.snackBar.open('Score submitted!', 'Dismiss', {
              duration: 3000,
            });
          });
        },
        error: (response) => {
          this.formError = response.error;
        },
      });
  }
}
