import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../../services/issue.service';
import { Issue } from '../../../models/issue';
import { map, Observable, of } from 'rxjs';
import { GameService } from '../../../services/game.service';
import Game from '../../../models/game';
import { IssueStatus } from '../../../models/issue-status';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-admin-issues-page',
  templateUrl: './admin-issues-page.component.html',
  styleUrl: './admin-issues-page.component.scss',
})
export class AdminIssuesPageComponent implements OnInit {
  protected readonly displayedColumns = [
    'id',
    'game',
    'username',
    'description',
    'status',
    'timestamp',
    'delete',
  ];
  protected issues$: Observable<Issue[]> = of();
  protected games$: Observable<Game[]> = of();
  protected IssueStatus = IssueStatus;

  constructor(
    private readonly issueService: IssueService,
    private readonly gameService: GameService
  ) {}

  ngOnInit(): void {
    this.issues$ = this.issueService.getAll$();
    this.games$ = this.gameService.allGames$;
  }

  get issueStatuses(): IssueStatus[] {
    return [
      IssueStatus.NOT_AN_ISSUE,
      IssueStatus.IN_PROGRESS,
      IssueStatus.FIXED,
      IssueStatus.CANNOT_REPRODUCE,
      IssueStatus.NEEDS_TRIAGE,
    ];
  }

  getGame$(gameId: number): Observable<Game | undefined> {
    return this.games$.pipe(
      map((games) => games.filter((game) => game.id == gameId).pop())
    );
  }

  statusChanged(issue: Issue, event: MatSelectChange) {
    issue.status = event.value;
    this.issueService.update$(issue).subscribe();
  }

  delete(issue: Issue): void {
    if (
      confirm(
        `Are you sure you want to delete issue ${issue.id} with description "${issue.description}"?`
      )
    ) {
      this.issueService
        .delete$(issue)
        .subscribe(() => (this.issues$ = this.issueService.getAll$()));
    }
  }
}
