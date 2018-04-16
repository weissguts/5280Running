import { Component, OnInit } from '@angular/core';
import { RacesService } from './races.service';

@Component({
  selector: 'dh-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {
  showRaces() {
    this.RacesService.getRace()
      .subscribe(data => this.race = {

    }
  }
  constructor() { }

  ngOnInit() {
  }

}
