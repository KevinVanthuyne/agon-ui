import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {UrlService} from "./url.service";
import AbstractDivision from "../models/division/abstract-division";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  constructor(private readonly http: HttpClient) { }

  getDivisionsForGame$(gameId: number) {
    return this.http.get<AbstractDivision[]>(`${UrlService.URLS.divisions.game}/${gameId}`);
  }
}
