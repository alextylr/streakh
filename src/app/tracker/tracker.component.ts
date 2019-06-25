import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  // const calendar = new FullCalendar.Calendar(calendarEl, {
  //   plugins: [ 'dayGrid', 'timeGrid', 'list' ] // an array of strings!
  // });

  constructor() { }

  ngOnInit() {
  }

}
