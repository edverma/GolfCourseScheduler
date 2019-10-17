import { Component, OnInit } from '@angular/core';
import * as jquery from '../../../node_modules/jquery/dist/jquery.slim.js';
import * as bootstrap from '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import { ScheduleRequirements } from './ScheduleRequirements';

import { SetScheduleService } from '../../services/setSchedule.service';

@Component({
  selector: 'set-schedule',
  templateUrl: './set-schedule.component.html',
  //TODO: fix the way this css is imported so it can be imported globally
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app/app.component.css']
})

export class SetScheduleComponent implements OnInit{
  options: ScheduleRequirements;

  constructor(private setScheduleService: SetScheduleService) { }

  ngOnInit() {
    this.options = new ScheduleRequirements();
  }

  string2Date(): void{
    let options = this.options;
    options.dateDates[0] = new Date(options.dateStrings[0]);
    options.dateDates[0].setDate(options.dateDates[0].getDate()+1); //This line is here bc when I select date on bootstrap calendar it returns day - 1

    for (var i=1; i < 7; i++){
      options.dateDates[i] = new Date(options.dateDates[0]);
      options.dateDates[i].setDate(options.dateDates[0].getDate()+i);
      options.dateStrings[i] = options.dateDates[i].toString();
      options.dateStrings[i] = options.dateStrings[i].substr(0,15);
    }

    options.dateStrings[0] = options.dateDates[0].toString();
    options.dateStrings[0] = options.dateStrings[0].substr(0,15);
  }

  onSubmit() {
    let optionsJSON = JSON.stringify( this.options );
    this.setScheduleService.post( optionsJSON );
  }
}
