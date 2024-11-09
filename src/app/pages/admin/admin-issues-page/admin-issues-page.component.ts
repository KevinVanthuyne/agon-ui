import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../../services/issue.service';
import { Issue } from '../../../models/issue';
import { map, Observable, of } from 'rxjs';
import { GameService } from '../../../services/game.service';
import Game from '../../../models/game';
import { IssueStatus } from '../../../models/issue-status';

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

  getGame$(gameId: number): Observable<Game | undefined> {
    return this.games$.pipe(
      map((games) => games.filter((game) => game.id == gameId).pop())
    );
  }
}
