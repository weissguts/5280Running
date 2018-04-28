import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {register} from 'ts-node';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../authentication.service';
import {LoginService} from '../LoginService';


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


  constructor(private auth: AuthenticationService, private http: HttpClient , private router: Router, public dialog: MatDialog, public login: LoginService) {}


  /**************************************Modal Methods**************************************************************/
  /****************************************Register*************************************************************************/
  openDialogR(http, router, auth, dialog, login ): void {
    let dialogRef = this.dialog.open(HeaderModalDialog, {
      width: '250px',
      data: {
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        age: this.age,
        zipcode: this.zipcode,
        password: this.password}

    });

    dialogRef.afterClosed().subscribe(result => {
      this.auth.register(result).subscribe(() => {

        localStorage.setItem('currentUser', JSON.stringify({

            email: this.email,
            firstname: this.firstname,
            lastname: this.lastname,
            age: this.age,
            zipcode: this.zipcode,
            password: this.password

        }));

        this.router.navigateByUrl('/home');
      }, (err) => {
        console.error(err);
      });

      console.log('The dialog was closed');
      console.log(result);

    });
  }

  /**************************************Modal Methods**************************************************************/
  /****************************************Login*************************************************************************/

  openDialogL(http, router, auth, dialog, login ): void {
    let dialogRef = this.dialog.open(HeaderModalDialogL, {
      width: '250px',
      data: {
        email: this.email,
        password: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.auth.login(result).subscribe(() => {
        console.log(result);

        this.login.onLogin(result);
        this.router.navigateByUrl('/home');

      }, (err) => {
        console.error(err);
      });
      console.log('The dialog was closed');

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
    public dialogRef: MatDialogRef<HeaderModalDialogL>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
