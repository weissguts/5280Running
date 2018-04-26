import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import {RacesModel} from './races.model';

export interface Race {
  activeApiURL: string;
  textfile: string;
}

export interface IRace {
  id: Number;
  activityStartDate: Date;
  assetAttributes: Array<any>;
  assetName: string;
  description: Array<any>;
  logoUrlAdr: string;
  website: string;
  placeName: string;
}

// tslint:disable-next-line:max-line-length
const activeApiURL = 'https://running-201301.appspot.com/api/races';

@Injectable()
export class RacesService {
   private races: RacesModel[] = [
    new RacesModel('2', 'Cat Run', '02/02/1902', 'www.test2.com')
  ];

  constructor(private httpClient: HttpClient) { }
  getRace() {
    return this.httpClient.get(activeApiURL).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  getRaceResponse(): Observable<HttpResponse<Array<IRace>>> {
    return this.httpClient.get<Array<IRace>>(
      activeApiURL, {
        observe: 'response'
      });
  }

  // setRaces(races: RacesModel[]) {
  //   this.races = races;
  //   this.racesChanged.next(this.races.slice());
  //   console.log(races);
  //
  // }

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
