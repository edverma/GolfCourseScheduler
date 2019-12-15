import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../../backend/database/mongoModels';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const serviceAddress = environment.serverUrl.concat( '/session' );

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  getUsingUser() {
    const token = localStorage.getItem('token');
    return this.http.post<User>(serviceAddress.concat('/user'), {token: token}, httpOptions);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<any> {
    return this.http.post<User>(serviceAddress.concat('/login'), {email, password});
  }

  getStatus(): Observable<User> {
    return this.http.get<User>(serviceAddress.concat('/login'));
  }
}
