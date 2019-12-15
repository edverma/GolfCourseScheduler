import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AuthGuardService as AuthGuard } from '../services/auth-guard.service';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SetScheduleComponent } from '../components/set-schedule/set-schedule.component';
import { ScheduleComponent } from '../components/schedule/schedule.component';
import {UserListComponent} from "../components/user-list/user-list.component";
import {UserEditComponent} from "../components/user-edit/user-edit.component";
import {LoginComponent} from "../components/login/login.component";
import {StatusComponent} from "../components/status/status.component";

const routes: Routes = [
  { path: '', redirectTo: 'schedule', pathMatch: 'full' },
  { path: 'heading', component: NavbarComponent, canActivate: [AuthGuard] },
  { path: 'set-schedule', component: SetScheduleComponent, canActivate: [AuthGuard] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  { path: 'user-edit/:id', component: UserEditComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'status', component: StatusComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
