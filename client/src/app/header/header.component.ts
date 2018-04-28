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
  message: string;

  constructor(private loginService: LoginService) {
    this.loginService.user$.subscribe((user: UserDetails) => {

      this.loginService.getFromStorage();
      this.email = user.email;

      //Checks to see if email has a value. If true then relay message to header component.
      if (this.email != undefined) {
        this.message = 'Hello ' + this.email;
      }

    })

  }

  ngOnInit() {

  }

}
