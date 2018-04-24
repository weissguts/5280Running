import {Race, RacesService} from './races.service';

export class RacesModel {
  error: any;
  headers: string[];
  race: Race;
  public id: string;
  public date: string;
  public raceName: string;
  public distanceR: string;
  public location: string;
  public description: string;
  public website: string;

  constructor(id: string, date: string, raceName: string, website: string) {
    this.id = id;
    this.date = date;
    this.raceName = raceName;
    this.website = website;
  }
}


// constructor(private http: HttpClient, date: string, raceName: string, distance: string, location: string) {
//   this.date = date;
//   this.raceName = raceName;
//   this.distance = distance;
//   this.location = location;
