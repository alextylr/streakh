import { Component, OnInit, TemplateRef, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarView, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import * as moment from 'moment';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { ResultsService } from 'src/assets/services/results.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrackerComponent implements OnInit {
  events: CalendarEvent[] = [];

  @Input() headerTemplate: TemplateRef<any>;

  @Input() results: any[];

  now: string;
  
  // to do : implement modal popup when user logs their streak
  // @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();
  
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  activeDayIsOpen: boolean = false;

  constructor(private result: ResultsService) {}


  ngOnInit() {
    this.now = moment().format('MMMM YYYY');
    this.results = this.result.getResults();
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log({ event, action });
    // to do 
    // this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
   let habitName = this.results[1];
    this.events = [
      ...this.events,
      {
        title: habitName,
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.purple,
        draggable: false,
        resizable: {
          beforeStart: false,
          afterEnd: false
        }
      }
    ];
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }
}


const colors: any = {
    purple: {
      primary: '#3f51b5',
      secondary: '#3f51b5'
    }
  };
