import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  //TODO: fix the way this css is imported so it can be imported globally
  styleUrls: ['../app/app.component.css']
})
export class HeadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
