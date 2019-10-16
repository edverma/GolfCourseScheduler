import { Component, OnInit } from '@angular/core';
import * as jquery from '../../../node_modules/jquery/dist/jquery.slim.js';
import * as bootstrap from '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  //TODO: fix the way this css is imported so it can be imported globally
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app/app.component.css']
})
export class HeadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
