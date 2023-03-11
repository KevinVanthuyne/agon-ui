import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import Game from '../../../../models/game';
import { GameService } from '../../../../services/game.service';
import { HighScoreCompetitionService } from '../../../../services/competition/high-score-competition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-division-page',
  templateUrl: './new-division-page.component.html',
  styleUrls: ['./new-division-page.component.scss'],
})
export class NewDivisionPageComponent implements OnInit {
  @ViewChild('formDirective') private formDirective: NgForm | undefined;

  games: Game[] = [];
  form = this.fb.nonNullable.group({
    gameId: [0, [Validators.required, Validators.min(1)]],
  });

  // TODO only HighScoreCompetition supported for now
  constructor(
    private fb: FormBuilder,
    private gameService: GameService,
    private competitionService: HighScoreCompetitionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gameService.allGames$.subscribe((games) => (this.games = games));
  }

  onSubmit() {
    this.competitionService.addDivision(this.form.value.gameId!).subscribe({
      next: () => {
        this.router.navigate(['/admin/divisions']);
      },
    });
  }
}
