import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

export interface UserDetails {
  _id: string;
  email: string;
  firstname: string;
  lastname: string;
  exp: number;
  iat: number;
  age: number;
  zipcdoe: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}

@Injectable()
export class AuthenticationService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) {

  }


  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

// JSON strings seperated by the 3 dots. 1 = Header, 2 = Payload, 3 = Signature
// Grabs the user details and checks the payload.
  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      //Grabs the 2nd part of the JSON string - the "Payload".
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

// Method that is able to construct and return the proper HTTP request observable depending on the specific type of request.
  private request(method: 'post' | 'get', type: 'login' | 'register' | 'profile', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`http://localhost:8080/api/${type}`, user);
    } else {
      base = this.http.get(`https://localhost:8080/api/${type}`, {headers: {Authorization: `Bearer ${this.getToken()}`}});
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }


  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    var userData = this.request('post', 'login', user);
    console.log(userData);
    return userData;
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }


}
