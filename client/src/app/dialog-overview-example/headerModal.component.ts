import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'dh-headerModal',
  templateUrl: './headerModal.component.html',
  styleUrls: ['./headerModal.component.scss']
})
export class HeaderModalComponent {

  emailM: string;
  firstname: string;
  lastname: string;
  passwordM: string;
  zipcode: number;
  age: number;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(HeaderModalDialog, {
      width: '250px',
      data: {
        emailM: this.emailM,
        firstname: this.firstname,
        lastname: this.lastname,
        passwordM: this.passwordM,
        zipcode: this.zipcode,
        age: this.age}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
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



