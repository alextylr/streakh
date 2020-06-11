import { Component, OnInit, TemplateRef, Input, ViewEncapsulation, ViewChild, OnChanges } from '@angular/core';
import { CalendarEvent, CalendarView, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarDateFormatter } from 'angular-calendar';
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
export class TrackerComponent implements OnInit, OnChanges {
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

  // actions: CalendarEventAction[] = [
  //   {
  //     label: '<i class="fa fa-fw fa-pencil"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.handleEvent('Edited', event);
  //     }
  //   },
  //   {
  //     label: '<i class="fa fa-fw fa-times"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.events = this.events.filter(iEvent => iEvent !== event);
  //       this.handleEvent('Deleted', event);
  //     }
  //   }
  // ];

  activeDayIsOpen: boolean = false;
  disableLog: boolean;

  constructor(private surveyService: SurveyService, private modalService: BsModalService) { }


  ngOnInit() {
    this.now = moment().format('MMMM YYYY');
    this.results = this.surveyService.getResults();
    console.log(this.results, 'tracker');
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
          color: colors.purple,
          draggable: false,
          resizable: {
            beforeStart: false,
            afterEnd: false
          }
        }
      ];
    this.disableLog = true;
    this.modalRef = this.modalService.show(this.modalContent);
  }

  ngOnChanges() {
    
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
}


const colors: any = {
  purple: {
    primary: '#3f51b5',
    secondary: '#3f51b5'
  }
};
