import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

activeApiURL = '../assets/races.json';

@Injectable()
export class Race {
  public date: string;
  public raceName: string;
  public distance: string;
  public location: string;
  constructor(private http: HttpClient, date: string, raceName: string, distance: string, location: string) {
    this.date = date;
    this.raceName = raceName;
    this.distance = distance;
    this.location = location;
  }

}
