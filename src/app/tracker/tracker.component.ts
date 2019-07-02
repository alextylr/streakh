import { Component, OnInit, TemplateRef, Input, ViewEncapsulation } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import * as moment from 'moment';
import { RRule, RRuleSet, rrulestr } from 'rrule'
import { getMonthView } from 'calendar-utils';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrackerComponent implements OnInit {
  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  @Input() headerTemplate: TemplateRef<any>;

  @Input() results: [];

  now: string;


  constructor() { }

  ngOnInit() {
    this.now = moment().format('MMMM YYYY');
  }


}

interface RecurringEvent {
  title: string;
  color: any;
  rrule?: {
    freq: any;
    bymonth?: number;
    bymonthday?: number;
    byweekday?: any;
  };
}