import { Component, OnInit } from '@angular/core';

import { Race } from './races.model';

@Component({
  selector: 'dh-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {
  races: Race[] = [
    new Race('01/01/01', 'TestRace', '5k', 'Denver, CO'),
    new Race('02/01/01', 'TestTWO', '10k', 'Englewood, CO')
  ];
  constructor() { }

  ngOnInit() {
  }

}
