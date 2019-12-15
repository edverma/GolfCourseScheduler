import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, selectAuthState } from '../../store/app.states';
import { LogOut } from '../../store/actions/auth.actions';
import { User } from '../../clientModels';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  //TODO: fix the way this css is imported so it can be imported globally
  styleUrls: ['../app/app.component.css']
})
export class NavbarComponent implements OnInit {
  usingUser: User;
  sub: any;
  router: Router;
  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  errorMessage = null;


  constructor(
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

  logout(): void {
    this.store.dispatch(new LogOut);
  }

}
