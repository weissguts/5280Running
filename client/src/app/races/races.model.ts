import {Race, RacesService} from './races.service';

export class RacesComponent {
  error: any;
  headers: string[];
  race: Race;
  constructor(private racesService: RacesService) {}
  showRace() {
    this.racesService.getRace().subscribe(
      data => this.race = { ...data },
      error => this.error = error
    );
  }

  showRaceReponse() {
    this.racesService.getRaceResponse().subscribe(resp => {
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
      `${key}: ${resp.headers.get(key)}`);
      this.race = { ... resp.body};
    });
  }
}

// public date: string;
// public raceName: string;
// public distance: string;
// public location: string;
// constructor(private http: HttpClient, date: string, raceName: string, distance: string, location: string) {
//   this.date = date;
//   this.raceName = raceName;
//   this.distance = distance;
//   this.location = location;
