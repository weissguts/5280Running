import { Component, OnInit } from '@angular/core';
import {Race, RacesService} from './races.service';
import { HttpClient } from '@angular/common/http';
import {RacesModel} from './races.model';

interface IRace {
  id: Number;
  activityStartDate: Date;
  assetAttributes: Array<any>;
  assetName: string;
  description: Array<any>;
  logoUrlAdr: string;
  website: string;
}

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
  races: IRace[];
  raceM: RacesModel[] = [
    new RacesModel('1', 'Puppy Run', '01/01/1901', 'www.test.com')
  ];

  raceMn: any[] = [];

  constructor(private racesService: RacesService) {
    var raceArray = [];
    this.racesService.getRaceResponse()
      .subscribe(resp => {
        this.races = resp.body;
        console.log(this.raceM);
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

