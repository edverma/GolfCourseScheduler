import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as _ from 'lodash';

import {AuthService} from '../../services/auth.service';
import {ScheduleShift, ScheduleRequirementsImproved, User} from '../../clientModels';
import { SetScheduleService } from '../../services/setSchedule.service';

@Component({
  selector: 'set-schedule',
  templateUrl: './set-schedule.component.html',
  //TODO: fix the way this css is imported so it can be imported globally
  styleUrls: ['../app/app.component.css']
})

export class SetScheduleComponent implements OnInit{
  usingUser: User;
  week:  ScheduleRequirementsImproved;
  shifts: ScheduleShift[];

  constructor(
    private setScheduleService: SetScheduleService,
    private router: Router,
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
    this.week = new ScheduleRequirementsImproved();
    this.setScheduleService.getRequirements()
      .subscribe({
        next(data) { vm.shifts = data; },
        error(err) { console.error(err); },
        complete() { vm.week.shifts = vm.fillDays( vm.shifts ); }
      });
  }

  fillDays ( shifts: ScheduleShift[] ): ScheduleShift[][] {
    let days: ScheduleShift[][] = [];
    for ( let i = 0; i < 7; i++ ) {
      days.push([]);
      for ( let shift of shifts ) {
        days[i].push(shift);
      }
    }
    return days;
  }

  string2Date(): void {
    let dateDates: Date[] = this.week.dateDates;
    let dateStrings: string[] = this.week.dateStrings;
    // @ts-ignore
    dateDates[0] = new Date(dateStrings[0]);
    dateDates[0].setDate(dateDates[0].getDate()+1); //This line is here bc when I select date on bootstrap calendar it returns day - 1

    for (let i=1; i < 7; i++){
      // @ts-ignore
      dateDates[i] = new Date(dateDates[0]);
      dateDates[i].setDate(dateDates[0].getDate()+i);
      dateStrings[i] = dateDates[i].toString();
      dateStrings[i] = dateStrings[i].substr(0,15);
    }
    dateStrings[0] = dateDates[0].toString();
    dateStrings[0] = dateStrings[0].substr(0,15);
  }

  onSubmit(): void {
    const vm = this;
    this.setDatetime ( () => {
      const weekJSON = JSON.stringify( this.week );
      this.setScheduleService.postRequirements( weekJSON )
        .subscribe({
          next(data) { console.log( data );},
          error(err) { console.error(err); },
          complete() { vm.router.navigate(['/schedule']) }
        });
    });
  }

  setDatetime ( callback ): void {
    let week = JSON.parse(JSON.stringify(this.week));
    _.each( week.shifts, (shifts, i) => {
      _.each( shifts, (shift) => {
        shift.start_datetime = week.dateDates[i];
        shift.end_datetime = week.dateDates[i];
      });
    });

    this.week = JSON.parse(JSON.stringify(week));
    _.each( this.week.shifts, (shifts, i) => {
      _.each( shifts, (shift) => {
        // @ts-ignore
        shift.start_datetime = new Date(shift.start_datetime);
        // @ts-ignore
        shift.end_datetime = new Date(shift.end_datetime)

        this.setTime(shift.start_datetime, shift.start_time);
        this.setTime(shift.end_datetime, shift.end_time);
      });
    });
    callback();
  }

  setTime(date: Date, timeString: String): void {
    let hourInt = this.getHourFromString(timeString);
    let minuteInt = this.getMinuteFromString(timeString);
    date.setHours(hourInt, minuteInt);
  }

  getHourFromString(timeString: String): number {
    let splitString = timeString.split(':');
    return parseInt(splitString[0]);
  }

  getMinuteFromString(timeString: String): number {
    let splitString = timeString.split(':');
    return parseInt(splitString[1]);
  }
}
