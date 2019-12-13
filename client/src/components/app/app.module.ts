import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../../routing/routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from '../heading/heading.component';
import { SetScheduleComponent } from '../set-schedule/set-schedule.component';
import {ScheduleComponent} from '../schedule/schedule.component';
import {AgGridModule} from "ag-grid-angular";

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    SetScheduleComponent,
    ScheduleComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        AgGridModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
