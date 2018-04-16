import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class RacesService {

  constructor(private http: HttpClient) { }

}
