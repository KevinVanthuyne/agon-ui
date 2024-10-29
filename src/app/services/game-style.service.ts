import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import GameStyle from '../models/game-style';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameStyleService {
  constructor(private readonly http: HttpClient) {}

  get$(id: number): Observable<GameStyle> {
    return this.http.get<GameStyle>(`${UrlService.URLS.gameStyles.root}/${id}`);
  }

  update$(gameStyle: GameStyle): Observable<GameStyle> {
    return this.http.put<GameStyle>(
      `${UrlService.URLS.gameStyles.root}`,
      gameStyle
    );
  }
}
