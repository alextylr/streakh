import { Component, OnInit, Input, Output } from '@angular/core';
import { SurveyService } from 'src/assets/services/streak.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.scss']
})
export class SurveyQuestionsComponent implements OnInit {
  submit: boolean = true;
  count: number = 0;
  results = [];
  done: boolean = false;

  questions = [];

  constructor(private survey: SurveyService, private router: Router) {
  }

  ngOnInit() {
    this.survey.getSurvey().subscribe(survey => this.questions = survey);
  }

  helpMe(index: any) {
    //go through questions, and look for an alternate path

    //if there is an alternate path, follow that path

    //then push all responses to results array

    this.results.push(this.questions[index].response);

    if (this.results[2] && this.count < this.questions.length - 2) {
      this.optionsPlzHelp();
    }

    if (this.check()) {
      this.done = true;
    }

    if (this.questions[index].alternatePath && this.questions[index].response <= 7) {
      ++this.count;
    }

    else if (this.questions[index].alternatePath && this.questions[index].response > 7) {
      this.count += 2;
      this.done = true;
    }
    else {
      ++this.count;
    }
  }

  check() {
    if (this.count === this.questions.length - 1) {
      return true;
    } else {
      return false;
    }
  }

  checkBool() {
    return this.done;
  }

  optionsPlzHelp() {
    if (this.results[2] === 'daily' || this.results[2] === 'weekly') {
      const newHelp = this.questions[2].options.indexOf(this.results[2]);
      this.questions[4].options[0] = 'Decrease to ' + this.questions[2].options[newHelp + 1];
      if (this.results[4] != 'I got this') {
        this.results[2] = this.questions[2].options[newHelp + 1];
      }
    }
  }

  leavePlz() {
    this.router.navigateByUrl('track');
  }

}

export class Question {
  question: string;
  options?: [];
  optionDescription?: [];
  response?: any;
  inputType: string;
  alternatePath?: boolean;
}
