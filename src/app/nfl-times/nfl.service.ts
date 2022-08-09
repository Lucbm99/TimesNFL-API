import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NflService {
  private baseURL: string = 'http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams';

  constructor(
    private _httpClient: HttpClient
  ) { }

  public getTeamsNFL(): Observable<any> {
    return this._httpClient.get<any>(`${this.baseURL}`)
    .pipe(
      tap((data: any) => 
        data.sports
    ),
    catchError((error: HttpErrorResponse) => {
      console.log('error', error);
      return EMPTY; 
    }),
  )}
}
