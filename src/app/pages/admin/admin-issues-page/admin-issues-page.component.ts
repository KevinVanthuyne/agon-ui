import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../../services/issue.service';
import { Issue } from '../../../models/issue';
import { Observable, of } from 'rxjs';

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
  ];
  protected issues$: Observable<Issue[]> = of();

  constructor(private readonly issueService: IssueService) {}

  ngOnInit(): void {
    this.issues$ = this.issueService.getAll$();
  }
}
