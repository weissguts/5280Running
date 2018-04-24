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
  raceM: any[];

  constructor(private racesService: RacesService) {
    var raceM = [];
    var raceArray = [];
    this.racesService.getRaceResponse()
      .subscribe(resp => {
        raceArray.push(resp.body);
        for (let obj of raceArray) {
          for (let i in obj) {
            raceM.push({
              "ID": obj[i].id + ",",
              "Date": obj[i].activityStartDate,
              "RaceName": obj[i].assetName,
              "Website": obj[i].website
            })
          }
          console.log(raceM);
          return raceM;
        }
      });

  }

  // showRace() {
  //   this.racesService.getRace().subscribe(
  //     data => this.race = {...data},
  //     error => this.error = error
  //   );
  //   console.log(this.race + ' Test');
  // }
  //
  // showRaceReponse() {
  //   var raceM = [];
  //   var raceArray = [];
  //   this.racesService.getRaceResponse()
  //     .subscribe(resp => {
  //       raceArray.push(resp.body);
  //       for (let obj of raceArray) {
  //         for (let i in obj) {
  //           raceM.push({
  //             "ID:": obj[i].id + ",",
  //             "Date:": obj[i].activityStartDate,
  //             "RaceName:": obj[i].assetName,
  //             "Website:": obj[i].website
  //           })
  //         }
  //         console.log(raceM);
  //         return raceM;
  //       }
  //     });
  // }
}

