import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import {AgGridModule} from "ag-grid-angular";
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from '../../routing/routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeadingComponent } from '../heading/heading.component';
import { SetScheduleComponent } from '../set-schedule/set-schedule.component';
import {ScheduleComponent} from '../schedule/schedule.component';
import {UserListComponent} from "../user-list/user-list.component";
import {UserEditComponent} from "../user-edit/user-edit.component";
import {LoginComponent} from "../login/login.component";
import { AuthService } from '../../services/auth.service';
import { AuthEffects } from '../../store/effects/auth.effects';
import { reducers } from '../../store/app.states';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    SetScheduleComponent,
    ScheduleComponent,
    UserListComponent,
    UserEditComponent,
    LoginComponent
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
