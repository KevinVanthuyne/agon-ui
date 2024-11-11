import { Injectable } from '@angular/core';
import { Issue } from '../models/issue';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  constructor(private http: HttpClient) {}

  getAll$(): Observable<Issue[]> {
    return this.http.get<Issue[]>(UrlService.URLS.issues.root);
  }

  addIssue$(issue: Issue): Observable<void> {
    return this.http.post<void>(UrlService.URLS.issues.root, issue);
  }

  updateIssue$(issue: Issue): Observable<Issue> {
    return this.http.put<Issue>(UrlService.URLS.issues.root, issue);
  }

  delete$(issue: Issue): Observable<void> {
    return this.http.delete<void>(`${UrlService.URLS.issues.root}/${issue.id}`);
  }
}
