import { Component, OnInit } from '@angular/core';
import {Race, RacesService} from './races.service';
import { HttpClient } from '@angular/common/http';
import {RacesModel} from './races.model';

@Component({
  selector: 'dh-races',
  templateUrl: './races.component.html',
  providers: [ RacesService ],
  styleUrls: ['./races.component.scss']
})
export class RacesComponent {
  public id: string;
  public date: string;
  public raceName: string;
  public website: string;
  error: any;
  headers: string[];
  race: Race;
  racesM: RacesModel[] = [
    new RacesModel(this.id, this.date, this.raceName, this.website)
  ];
  constructor(private racesService: RacesService) {
    var raceArray = [];
    this.racesService.getRaceResponse()
      .subscribe(resp => {
        raceArray.push(resp.body);
        for (let obj of raceArray) {
          for (let i in obj) {
            console.log(
            this.id = obj[i].id,
            this.date = obj[i].activityStartDate,
            this.raceName = obj[i].assetName,
            this.website = obj[i].website
          )
          }
        }
      });
  }

  showRace() {
    this.racesService.getRace().subscribe(
      data => this.race = {...data},
      error => this.error = error
    );
    console.log(this.race + ' Test');
  }
  // Gets data from API and console logs it to test.
  showRaceReponse() {
    var raceArray = [];
    this.racesService.getRaceResponse()
      .subscribe(resp => {
        raceArray.push(resp.body);
        for (let obj of raceArray) {
          for (let i in obj) {
            console.log(
              "ID:", obj[i].id + ",",
              "Date:", obj[i].activityStartDate + ",",
              "RaceName:", obj[i].assetName + ",",
              "Website:", obj[i].website + + ",");
          }
        }

      });
  }

}
