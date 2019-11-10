import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {ScheduleShift} from '../clientModels';

import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const serviceAddress = environment.serverUrl.concat( '/set-schedule' );

@Injectable({
  providedIn: 'root',
})
export class SetScheduleService {

  constructor(private http: HttpClient) { }

  getRequirements() {
    return this.http.get<ScheduleShift[]>(serviceAddress.concat('/schedule-shift'), httpOptions);
  }

  postRequirements( scheduleRequirements: string ){
    this.http.post<string>(serviceAddress, scheduleRequirements, httpOptions)
      .subscribe(res => {
        console.log('Server response: ', res);
      });
  }
}
