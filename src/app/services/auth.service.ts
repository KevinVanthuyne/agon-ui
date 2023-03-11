import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticated = false;

  constructor(private http: HttpClient) {
    // TODO check if a session cookie is already present
  }

  authenticate$(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders(
      username && password
        ? {
            authorization: 'Basic ' + btoa(username + ':' + password),
          }
        : {}
    );
    return this.http.get<void>(UrlService.URLS.login, { headers }).pipe(
      map(() => {
        this.authenticated = true;
        return this.authenticated;
      })
    );
  }

  logout(): void {
    this.http.post(UrlService.URLS.logout, {}).subscribe({
      next: () => {
        this.authenticated = false;
      },
      error: (err) => console.error(err),
    });
  }
}
