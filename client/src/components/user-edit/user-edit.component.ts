import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {User, Availability} from "../../clientModels";
import {UserEditService} from "../../services/user-edit.service";
import {AuthService} from "../../services/auth.service";
import {UserRole} from "../../../../enums.js";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  usingUser: User;
  userID: Object;
  user: User;
  tempWeekday: number;
  tempTimeRange:[string, string];

  constructor(
    private userEditService: UserEditService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.tempWeekday = 0;
    this.tempTimeRange = ['','']
  }


  ngOnInit() {
    const vm = this;
    this.authService.getUsingUser()
      .subscribe({
        next(data) {vm.usingUser = data;},
        error(err) {console.error(err);},
        complete() { console.log('usingUser: ', vm.usingUser);}
      });
    this.route.paramMap.subscribe(params => {
      this.userID = this.route.snapshot.params.id;
      this.userEditService.getUserByIO(this.userID)
        .subscribe({
          next(data) {
              if(data){
                vm.user = data[0];
              } else{
                vm.user = {
                  _id: undefined,
                  availability: [undefined],
                  email: "",
                  fname: "",
                  lname: "",
                  password: "",
                  preferred_shifts: 0,
                  shift_types: [undefined],
                  token: "",
                  tenant: vm.usingUser.tenant,
                  role: UserRole.BASIC
                }
              }
            },
          error(err) { console.error(err); },
          complete() { console.log(vm.user)}
        });
    });
  }

  dayOfWeekAsString(dayIndex) {
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayIndex];
  }

  saveUser() {
    let userJSONString = JSON.stringify(this.user)
    this.userEditService.saveUser(userJSONString)
      .subscribe({
        next(data) { console.log(data);},
        error(err) { console.error(err);},
        complete() { }
      });
  }

  removeAvailability(weekday, timeRangeIndex) {
    for ( let i=0; i<this.user.availability.length; i++ ) {
      if ( this.user.availability[i].weekday === weekday ) {
        if ( this.user.availability[i].time_ranges.length === 1 ) {
          this.user.availability.splice(i,1);
        } else {
          this.user.availability[i].time_ranges.splice(timeRangeIndex,1)
        }
      }
    }
  }

  addAvailability() {
    if(this.tempTimeRange[0] === '' || this.tempTimeRange[1] === '') {
      return;
    }
    let objWeekdays = this.user.availability.map(obj => (obj.weekday));
    this.tempWeekday = parseInt(String(this.tempWeekday));

    if( !objWeekdays.includes(this.tempWeekday) ){
      this.user.availability.push({
        weekday: this.tempWeekday,
        time_ranges: [JSON.parse(JSON.stringify(this.tempTimeRange))]
      });
    } else{
      this.user.availability.forEach((availability) => {
        if(availability.weekday === this.tempWeekday) {
            if (this.validateTimeRanges(availability.time_ranges, this.tempTimeRange)) {
              availability.time_ranges.push(JSON.parse(JSON.stringify(this.tempTimeRange)));
              return;
            }
        }
      });
    }
  }

  validateTimeRanges(existingTimeRanges, tempTimeRange) {
    let validated = true;
    for(let i = 0; i < existingTimeRanges.length; i++ ) {
      let existingTimeRange = existingTimeRanges[i];
      let existingStartHour = existingTimeRange[0].substring(0, 2);
      let existingStartMinute = existingTimeRange[0].substring(3, 5);
      let existingEndHour = existingTimeRange[1].substring(0, 2);
      let existingEndMinute = existingTimeRange[1].substring(3, 5);
      let tempStartHour = tempTimeRange[0].substring(0, 2);
      let tempStartMinute = tempTimeRange[0].substring(3, 5);
      let tempEndHour = tempTimeRange[1].substring(0, 2);
      let tempEndMinute = tempTimeRange[1].substring(3, 5);

      if (! ((tempStartHour >= existingEndHour || tempEndHour <= existingStartHour) &&
        (tempStartMinute >= existingEndMinute || tempEndMinute <= existingStartMinute))
      ) {
        validated = false;
      }
    }
    return validated;
  }

}
