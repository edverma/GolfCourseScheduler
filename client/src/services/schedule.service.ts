import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {ScheduleRequirementsImproved, User} from '../../../backend/database/mongoModels';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const serviceAddress = environment.serverUrl.concat( '/schedule' );


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  getSchedule() {
    return this.http.get<ScheduleRequirementsImproved>(serviceAddress.concat(''), httpOptions);
  }

  getEmployees() {
    return this.http.get<User[]>(serviceAddress.concat('/employees'), httpOptions);
  }
}
