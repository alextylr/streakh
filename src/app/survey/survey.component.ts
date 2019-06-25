import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  changed: boolean;

  constructor(private router: Router) {
    this.changed = false;
  }

  navToInfoPage() {
    this.changed = true;
    setTimeout(() => {
      this.router.navigateByUrl('survey-questions');
    }, 2000); 
  }

  ngOnInit() {
  }

}
