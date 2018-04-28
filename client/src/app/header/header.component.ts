import { Component, OnInit } from '@angular/core';
import {LoginService} from '../LoginService';
import {UserDetails} from '../authentication.service';



@Component({
  selector: 'dh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  email: string;
  firstname: string;
  lastname: string;
  message: string;

  constructor(private loginService: LoginService) {
    //Checks to see if there is a logged in user. Will run code below to relay to "message" via interpolation.
    this.loginService.user$.subscribe((user: UserDetails) => {
      this.loginService.getFromStorage();
      this.email = user.email;
      this.firstname = user.firstname;
      this.lastname = user.lastname;

      //Checks to see if email has a value. If true then relay message to header component.
      if (this.email != undefined) {
        console.log("Hey", user);
        this.message = 'Hello, ' + this.firstname + " " + this.lastname;
      }

    })

  }

  ngOnInit() {

  }

}
