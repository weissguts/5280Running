import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {register} from 'ts-node';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {HttpClient} from '@angular/common/http';



export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}

@Component({
  selector: 'dh-headerModal',
  templateUrl: './headerModal.component.html',
  styleUrls: ['./headerModal.component.scss']
})
export class HeaderModalComponent {

  email: string;
  firstname: string;
  lastname: string;
  password: string;
  zipcode: number;
  age: number;


  constructor(private http: HttpClient , private router: Router, public dialog: MatDialog) {}

  private token: string;

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
  private request(method: 'post'|'get', type: 'login'|'register'|'profile', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, user);
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
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
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }


  /**************************************Modal Methods**************************************************************/
  /****************************************Register*************************************************************************/
  openDialogR(): void {
    let dialogRef = this.dialog.open(HeaderModalDialog, {
      width: '250px',
      data: {
        email: this.email,
        firstname: this.firstname,
        password: this.password}

    });


    dialogRef.afterClosed().subscribe(result => {
      this.register(result).subscribe(() => {
        this.router.navigateByUrl('/');
      }, (err) => {
        console.error(err);
      });

      console.log('The dialog was closed');
      console.log(result);

    });
  }

  /**************************************Modal Methods**************************************************************/
  /****************************************Login*************************************************************************/

  openDialogL(): void {
    let dialogRef = this.dialog.open(HeaderModalDialog, {
      width: '250px',
      data: {
        email: this.email,
        password: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

    });
  }


}

@Component({
  selector: 'dh-headerModal-R',
  templateUrl: 'headerModalDialog.html',
})
export class HeaderModalDialog {

  constructor(
    public dialogRef: MatDialogRef<HeaderModalDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dh-headerModal-L',
  templateUrl: 'headerModalDialogL.html',
})
export class HeaderModalDialogL {

  constructor(
    public dialogRef: MatDialogRef<HeaderModalDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

