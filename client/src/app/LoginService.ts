import {Injectable} from '@angular/core';
import {UserDetails} from './authentication.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  private _user: BehaviorSubject<{}> = new BehaviorSubject<{}>({});

  public user$: Observable<{}> = this._user.asObservable();

  public constructor() {

  }

  public onLogin(user: UserDetails): void {
    this.setToStorage(user);
    this._user.next(user);

  }

  public getFromStorage(): UserDetails {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  public setToStorage(user: UserDetails): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }


}
