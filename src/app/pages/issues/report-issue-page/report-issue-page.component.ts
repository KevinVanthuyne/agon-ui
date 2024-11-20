import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { IssueService } from '../../../services/issue.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameService } from '../../../services/game.service';
import { Observable } from 'rxjs';
import Game from '../../../models/game';

@Component({
  selector: 'app-report-issue-page',
  templateUrl: './report-issue-page.component.html',
  styleUrl: './report-issue-page.component.scss',
})
export class ReportIssuePageComponent {
  @ViewChild('formDirective') private formDirective: NgForm | undefined;

  protected form = this.fb.nonNullable.group({
    gameId: [0, [Validators.required, Validators.min(1)]],
    username: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });
  protected formError: string | undefined;

  constructor(
    private fb: FormBuilder,
    private issueService: IssueService,
    private snackBar: MatSnackBar,
    private gameService: GameService
  ) {}

  get games$(): Observable<Game[]> {
    return this.gameService.visibleGames$;
  }

  onSubmit(): void {
    this.issueService
      .add$({
        gameId: this.form.value.gameId!,
        description: this.form.value.description!,
        username: this.form.value.username!,
      })
      .subscribe({
        next: () => {
          this.formDirective?.resetForm();
          this.formError = undefined;
          this.form.reset();
          this.snackBar.open(
            'Issue submitted. Thank you for your help!',
            'Dismiss',
            {
              duration: 3000,
            }
          );
        },
        error: (response) => {
          this.formError = response.error;
        },
      });
  }
}
