import { Component, OnInit, TemplateRef, Input, ViewEncapsulation, ViewChild, OnChanges } from '@angular/core';
import { CalendarEvent, CalendarView, CalendarDateFormatter } from 'angular-calendar';
import * as moment from 'moment';
import {
  startOfDay,
  endOfDay
} from 'date-fns';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CustomDateFormatter } from '../custom-date-formatter.provider';
import { SurveyService } from '../../assets/streak.service';


@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    }
  ]
})
export class TrackerComponent implements OnInit {
  events: CalendarEvent[] = [];

  @Input() headerTemplate: TemplateRef<any>;

  @Input() results: any[];

  now: string;

  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  modalRef: BsModalRef;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  localStorageEvents = []

  activeDayIsOpen: boolean = false;
  disableLog: boolean;

  constructor(private surveyService: SurveyService, private modalService: BsModalService) { }


  ngOnInit() {
    this.now = moment().format('MMMM YYYY');
    this.results = this.surveyService.getResults();
    this.formatEvents();   
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log({ event, action });
    this.modalData = { event, action };
  }

  addEvent(): void {
    let habitName = this.results[1];
    this.events = [
      ...this.events,
      {
        title: habitName,
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.purple
      }
    ];
    this.disableLog = true;
    this.modalRef = this.modalService.show(this.modalContent);
    localStorage.setItem('habitEvents', JSON.stringify(this.events));
  }


  setView(view: CalendarView) {
    this.view = view;
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  close() {
    this.modalRef.hide();
  }


  formatEvents() {
  this.localStorageEvents = JSON.parse(localStorage.getItem('habitEvents'))
  if (this.localStorageEvents) {
    this.events = this.localStorageEvents.map(event => {
      return {
        ...event,
        start: new Date(event.start),
        end: new Date(event.end)
      }
    });
  }
  }

}
const colors: any = {
  purple: {
    primary: '#3f51b5',
    secondary: '#3f51b5'
  }
};
