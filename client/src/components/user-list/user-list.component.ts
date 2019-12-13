import { Component, OnInit } from '@angular/core';
import {User} from "../../clientModels";
import {UserListService} from "../../services/user-list.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  fields: [
    { key: 'fname', sortable: true, sortDirection: 'desc' },
    { key: 'lname', sortable: true, sortDirection: 'desc' },
    { key: 'role', sortable: true, sortDirection: 'desc' }
  ];

  constructor(
    private userListService: UserListService
  ) { }

  ngOnInit() {
    const vm = this;
    this.userListService.getUsers()
      .subscribe({
        next(data) { vm.users = data; },
        error(err) { console.error(err); },
        complete() { console.log('users: ', vm.users)}
      });
  }

  dayOfWeekAsString(dayIndex) {
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayIndex];
  }

}
