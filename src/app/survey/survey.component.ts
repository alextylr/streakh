import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  template: `
  <div class="flex-container " [ngClass]="changed ? 'fade-out' :'fade-in'">
    <div class="flex-item">
      <h1>hi! welcome to Streakh</h1>
      <h2>Streakh is designed to help you build new habits by defining the habit you want to implement, setting a goal that is maintainable, and tracking your daily progress!</h2>
      <button (click)="navToInfoPage()" style="margin: 3rem;" class="btn btn-primary">let's get started!</button>
    </div>
</div>`
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
