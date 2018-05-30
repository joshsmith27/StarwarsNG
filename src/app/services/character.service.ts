import { Injectable } from '@angular/core';
import { Character, SwapiResponse } from '../classes/character-class';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    },
  )
};

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  swapiUrl = `https://swapi.co/api/people/`;
  constructor(
    private http: HttpClient,
  ) { }

  getCharacters(): Observable<SwapiResponse> {
    return this.http.get<any>(this.swapiUrl)
      .pipe(
        tap((response) => {
          return response.results.map((el) => {
            const arr = el.url.split('/');
            el.id = arr[arr.length - 2];
            return el;
          });
        }),
        catchError(this.handleError('getHeroes', []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
