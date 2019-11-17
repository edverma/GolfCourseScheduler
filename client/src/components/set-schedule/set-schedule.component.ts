import { Component, OnInit } from '@angular/core';
import * as jquery from '../../../node_modules/jquery/dist/jquery.slim.js';
import * as bootstrap from '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import {ShiftTime} from '../../../../enums.js';
import {ScheduleRequirementsImproved, ScheduleShift} from '../../clientModels';
import { SetScheduleService } from '../../services/setSchedule.service';

@Component({
  selector: 'set-schedule',
  templateUrl: './set-schedule.component.html',
  //TODO: fix the way this css is imported so it can be imported globally
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app/app.component.css']
})

export class SetScheduleComponent implements OnInit{
  days:  ScheduleRequirementsImproved;
  shifts: ScheduleShift[];

  constructor(private setScheduleService: SetScheduleService) { }

  ngOnInit() {
    const vm = this;
    vm.days = new ScheduleRequirementsImproved;
    vm.setScheduleService.getRequirements()
      .subscribe({
        next(data) { vm.shifts = data; },
        error(err) { console.error(err); },
        complete() { vm.days.shifts = vm.fillDays( vm.shifts ); }
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
    const dateDates: Date[] = this.days.dateDates;
    const dateStrings: String[] = this.days.dateStrings;
    // @ts-ignore
    dateDates[0] = new Date(dateStrings[0]);
    dateDates[0].setDate(dateDates[0].getDate()+1); //This line is here bc when I select date on bootstrap calendar it returns day - 1

    for (var i=1; i < 7; i++){
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
    const daysJSON = JSON.stringify( this.days );
    this.setScheduleService.postRequirements( daysJSON )
      .subscribe({
        next(data) { console.log(data) },
        error(err) { console.error(err); },
        complete() { }
      });;
  }
}
