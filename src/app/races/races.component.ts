import { Component, OnInit } from '@angular/core';
import {Race, RacesService} from './races.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dh-races',
  templateUrl: './races.component.html',
  providers: [ RacesService ],
  styleUrls: ['./races.component.scss']
})
export class RacesComponent {
  error: any;
  headers: string[];
  race: Race;

  constructor(private racesService: RacesService) {
  }

  showRace() {
    this.racesService.getRace().subscribe(
      data => this.race = {...data},
      error => this.error = error
    );
  }

  showRace_v1() {
    this.racesService.getRace_1().subscribe(data => this.race = {
      activeApiURL: data['activeApiURL'],
      textfile: data['textfile']
    });
  }

  showRace_v2() {
    this.racesService.getRace().subscribe(data => this.race = {...data});
  }

  showRaceReponse() {
    this.racesService.getRaceResponse()
    .subscribe(resp => {
    console.log({... resp});
    });
  }

}

