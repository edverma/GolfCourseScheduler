import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import {User} from '../../../backend/database/mongoModels';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const serviceAddress = environment.serverUrl.concat( '/user' );

@Injectable({
  providedIn: 'root'
})
export class UserEditService {

  constructor(private http: HttpClient) { }

  getUserByID( userID ) {
    return this.http.get<User>(serviceAddress.concat('/').concat(userID), httpOptions);
  }

  saveUser( user ) {
    return this.http.post<string>(serviceAddress.concat('/save'), user, httpOptions)
  }
}
