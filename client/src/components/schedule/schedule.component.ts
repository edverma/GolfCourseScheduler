import { Component, OnInit} from '@angular/core';
import * as moment from 'moment';

import {ScheduleRequirementsImproved, User} from '../../clientModels';
import { ScheduleService } from '../../services/schedule.service';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  usingUser: User;
  schedule: ScheduleRequirementsImproved;
  employees: User[];
  columnDefs: Array<Object>;
  rowData: Array<Object>;

  constructor(
    private scheduleService: ScheduleService,
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
    this.scheduleService.getSchedule()
      .subscribe({
        next(data) { vm.schedule = data[0]; },
        error(err) { console.error(err); },
        complete() {
          vm.setColumnDefs();
          vm.scheduleService.getEmployees()
            .subscribe({
              next(data) { vm.employees = data; },
              error(err) { console.error(err); },
              complete() {
                vm.setRowData();
              }
            });
        }
      });
  }

  setColumnDefs() {
    const vm = this;
    this.columnDefs = [{
      headerName: 'Employee',
      field: 'employee',
      sortable: true,
      filter: true
    }];
    this.schedule.dateDates.forEach((date, i) => {
      // @ts-ignore
      let dateMoment = moment(date);
      vm.columnDefs.push({
        headerName: dateMoment.format('MMM Do'),
        field: 'date'.concat(i.toString()),
        sortable: true,
        filter: true
      });
    });
  }

  setRowData() {
    const vm = this;
    this.rowData = [];
    console.log('shifts: ', this.schedule.shifts);
    let tempRowObj = {
      employee: undefined
    };

    this.employees.forEach(loopedEmployee => {
      tempRowObj.employee = loopedEmployee.fname;
      vm.schedule.dateDates.forEach((loopedDate, i) => {
        let loopedDateMoment = moment(loopedDate);
        vm.schedule.shifts[i].forEach(shift => {
          if ( shift.employee_id && shift.employee_id.toString().localeCompare(loopedEmployee._id.toString()) === 0 ) {
            let shiftDateMoment = moment(shift.start_datetime);
            tempRowObj['date'+i] = shiftDateMoment.format('HH:mm').concat(' ').concat(shift.shift.type);
          }
        });
      });
      vm.rowData.push(JSON.parse(JSON.stringify(tempRowObj)));
      for ( let key in tempRowObj ) {
        tempRowObj[key] = undefined;
      }
    });
  }

}
