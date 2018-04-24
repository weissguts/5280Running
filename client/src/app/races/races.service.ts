import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

export interface Race {
  activeApiURL: string;
  textfile: string;
}

// tslint:disable-next-line:max-line-length
const activeApiURL = '/api/races';

@Injectable()
export class RacesService {
  constructor(private httpClient: HttpClient) { }
  getRace() {
    return this.httpClient.get(activeApiURL).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  getRaceResponse(): Observable<HttpResponse<Race>> {
    return this.httpClient.get<Race>(
      activeApiURL, {
        observe: 'response'
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }
  makeIntentionalError() {
    return this.httpClient.get('not/a/real/url')
      .pipe(
        catchError(this.handleError)
      );
  }

}
