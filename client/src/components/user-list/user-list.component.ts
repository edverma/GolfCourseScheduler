import { Component, OnInit } from '@angular/core';
import {User} from "../../clientModels";
import {UserListService} from "../../services/user-list.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  usingUser: User;
  users: User[];
  fields: [
    { key: 'fname', sortable: true, sortDirection: 'desc' },
    { key: 'lname', sortable: true, sortDirection: 'desc' },
    { key: 'role', sortable: true, sortDirection: 'desc' }
  ];

  constructor(
    private userListService: UserListService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const vm = this;
    this.authService.getUsingUser()
      .subscribe({
        next(data) {vm.usingUser = data;},
        error(err) {console.error(err);},
        complete() { console.log('usingUser: ', vm.usingUser);}
      });
    this.userListService.getUsers()
      .subscribe({
        next(data) { vm.users = data; },
        error(err) { console.error(err); },
        complete() { console.log('users: ', vm.users)}
      });
  }

  deleteUser(userID) {
    const vm = this;
    this.userListService.deleteUser(userID)
      .subscribe({
        next(data) { console.log(data);},
        error(err) { console.error(err);},
        complete() {
          vm.userListService.getUsers()
            .subscribe({
              next(data) { vm.users = data; },
              error(err) { console.error(err); },
              complete() { console.log('users: ', vm.users)}
            });
        }
      });
  }

  getAvailabilityWeekdaysArr(availability) {
    return availability.map(obj => (obj.weekday));
  }

  dayOfWeekAsString(dayIndex) {
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayIndex];
  }

}
