import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from '../../routing/routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from '../heading/heading.component';
import { SetScheduleComponent } from '../set-schedule/set-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    SetScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
