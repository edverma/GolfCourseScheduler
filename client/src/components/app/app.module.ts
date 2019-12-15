import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import {AgGridModule} from "ag-grid-angular";
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from '../../store/effects/auth.effects';
import {AuthGuardService} from "../../services/auth-guard.service";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from '../../routing/routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SetScheduleComponent } from '../set-schedule/set-schedule.component';
import {ScheduleComponent} from '../schedule/schedule.component';
import {UserListComponent} from "../user-list/user-list.component";
import {UserEditComponent} from "../user-edit/user-edit.component";
import {LoginComponent} from "../login/login.component";
import {StatusComponent} from "../status/status.component";
import { AuthService } from '../../services/auth.service';
import { reducers } from '../../store/app.states';
import {
  TokenInterceptor, ErrorInterceptor
} from '../../services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SetScheduleComponent,
    ScheduleComponent,
    UserListComponent,
    UserEditComponent,
    LoginComponent,
    StatusComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        AgGridModule,
        EffectsModule.forRoot([AuthEffects]),
        StoreModule.forRoot(reducers, {}),
    ],
  providers: [
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
