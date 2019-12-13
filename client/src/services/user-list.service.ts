import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from '../../../backend/database/mongoModels';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const serviceAddress = environment.serverUrl.concat( '/users' );


@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(serviceAddress.concat(''), httpOptions);
  }
}
