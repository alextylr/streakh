import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.scss']
})
export class SurveyQuestionsComponent implements OnInit {

  questions = [{
    question: "What kind of habit do you want to form?",
    options: [
      "Exercise (swimming, running, going to the gym)", 
      "Wellness (getting more sleep, eating more veggies, meditating)",
      "Work (study more, read etc)",
      "Misc (language learning, gardening etc)"
    ],
    response: ""
  }]
  
  constructor() {
   }

  ngOnInit() {
  }

}


export class Question {
  question: string;
  options?: string[];
  response?: string;
}