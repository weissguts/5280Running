export class Race {
  public date: string;
  public raceName: string;
  public distance: string;
  public location: string;
  constructor(date: string, raceName: string, distance: string, location: string) {
    this.date = date;
    this.raceName = raceName;
    this.distance = distance;
    this.location = location;
  }

}
