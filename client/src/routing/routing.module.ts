import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeadingComponent } from '../components/heading/heading.component';
import { SetScheduleComponent } from '../components/set-schedule/set-schedule.component';
import { ScheduleComponent } from '../components/schedule/schedule.component';
import {UserListComponent} from "../components/user-list/user-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'set-schedule', pathMatch: 'full' },
  { path: 'heading', component: HeadingComponent },
  { path: 'set-schedule', component: SetScheduleComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'users', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
