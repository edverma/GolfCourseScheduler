import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const postAddress = environment.serverUrl.concat( '/set-schedule' );

@Injectable({
  providedIn: 'root',
})
export class SetScheduleService {

  constructor(private http: HttpClient) { }

  post( scheduleRequirements: string ){
    this.http.post<string>(postAddress, scheduleRequirements, httpOptions)
      .subscribe(res => {
        console.log('Server response: ', res);
      });
  }
}
