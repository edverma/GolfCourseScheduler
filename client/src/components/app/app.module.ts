import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../../routing/routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeadingComponent } from '../heading/heading.component';
import { SetScheduleComponent } from '../set-schedule/set-schedule.component';
import {ScheduleComponent} from '../schedule/schedule.component';
import {UserListComponent} from "../user-list/user-list.component";
import {UserEditComponent} from "../user-edit/user-edit.component";
import {AgGridModule} from "ag-grid-angular";

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    SetScheduleComponent,
    ScheduleComponent,
    UserListComponent,
    UserEditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        AgGridModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
