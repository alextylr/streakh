import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.scss']
})
export class SurveyQuestionsComponent implements OnInit {
  submit = true;
  count = 0;
  results: boolean;

  questions = [
    {
      question: 'What kind of habit do you want to form?',
      options: [
        'Exercise (swimming, running, going to the gym)',
        'Wellness (getting more sleep, eating more veggies, meditating)',
        'Work (study more, read etc)',
        'Misc (languge learning, gardening etc)'
      ],
      response: '',
      inputType: 'select'
    },
    {
      question: 'Let\'s get specific! What exactly do you want implement as a new habit?',
      options: '',
      response: '',
      inputType: 'text'
    },
    {
      question: 'How frequently do you plan on implementing this new habit?',
      options: [
        'Daily',
        'Weekly',
        'Monthly'
      ],
      response: '',
      inputType: 'select'
    },
    {
      question: 'How confident are you on a scale of 1-10 that you will perform your habit at your specified frequency?',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      response: '',
      inputType: 'scale'
    },
    {
      question: 'Hmm that\'s not very confident. Maybe you should decrease the frequency!',
      options: [
        'Decrease',
        'I got this'
      ],
      response: '',
      inputType: 'select'
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }

  helpMe() {
    this.count < 5 ? this.count++ : this.count = 0;
  }
}


export class Question {
  question: string;
  options?: string[];
  response?: string;
}