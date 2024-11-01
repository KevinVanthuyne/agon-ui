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

  addIssue$(issue: Issue): Observable<void> {
    return this.http.post<void>(UrlService.URLS.issues.root, issue);
  }
}
