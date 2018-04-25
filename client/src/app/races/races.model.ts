import {Race, RacesService} from './races.service';

export class RacesModel {
  public id: string;
  public raceName: string;
  public date: string;
  public website: string;

  constructor(id: string, raceName: string, date: string, website: string) {
    this.id = id;
    this.raceName = raceName;
    this.date = date;
    this.website = website;
  }


}

