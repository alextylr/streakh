import { Component, OnInit, Input, Output } from '@angular/core';
import { SurveyService } from 'src/assets/streak.service';
import { Router } from '@angular/router';
import { ResultsService } from 'src/assets/results.service';

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
  questions = [
    {
      "question": "What kind of habit do you want to form?",
      "options": [
        "exercise",
        "wellness",
        "work",
        "misc"
      ],
      "optionDescription": [
        "(swim, run, workout)",
        "(eat healthy, meditate, listen to lizzo)",
        "(study, read, sort email)",
        "(study a language, garden, practice Brazilian Jiu Jitsu)"
      ],
      "response": "",
      "inputType": "select"
    },
    {
      "question": "Let's give it a name! For example: Study Mandarin",
      "options": [],
      "response": "",
      "inputType": "text"
    },
    {
      "question": "How often would you want to implement this new habit?",
      "options": [
        "daily",
        "weekly",
        "monthly"
      ],
      "response": "",
      "inputType": "select"
    },
    {
      "question": "How confident are you on a scale of 1-10 that you will be able to implement your habit at your specified frequency?",
      "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      "response": 0,
      "inputType": "scale",
      "alternatePath": true
    },
    {
      "question": "Hmm that's not very confident. It is important to set small, acheivable goals that you can maintain over a long period of time. Maybe you should decrease the frequency!",
      "options": [
        "Decrease",
        "I got this"
      ],
      "response": "",
      "inputType": "select"
  
    }
  ];

  constructor(
    // private survey: SurveyService,
    private router: Router,
    private surveyService: SurveyService) {
  }

  ngOnInit() {
    // this.survey.getSurvey().subscribe(survey => this.questions = survey);
    // this.results = this.surveyService.getResults();
  }

  incrementQuestion(index: any) {
    this.results.push(this.questions[index].response);

    if (this.checkSurveyStatus()) {
      this.done = true;
    }

    if (this.results[2] && this.count <= this.questions.length - 1) {
      this.alternateRoute();
    }

    if (this.questions[index].alternatePath && this.questions[index].response < 7) {
      ++this.count;
    }

    else if (this.questions[index].alternatePath && this.questions[index].response >= 7) {
      this.count += 2;
      this.done = true;
    }
  
    else {
      ++this.count;
    }
  
  }

  checkSurveyStatus() {
    if (this.count === this.questions.length - 1) {
      return true;
    } else {
      return false;
    }
  }


  alternateRoute() {
    if (this.results[2] === 'daily' || this.results[2] === 'weekly') {
      const newRoute = this.questions[2].options.indexOf(this.results[2]);
      this.questions[4].options[0] = 'Decrease to ' + this.questions[2].options[newRoute + 1];
    
      if (this.results[4] && this.results[4] != 'I got this') {
        this.results[2] = this.questions[2].options[newRoute + 1];
      } 
      
      else if (this.results[4] && this.results[4] === 'I got this') {
        this.results[2] = this.questions[2].options[newRoute];
      }

    } 

    else {
      this.count += 2;
      this.done = true;
    }
  }

  // previousQuestion() {
  //   if (this.count > 0) {
  //     this.count--;
  //   }
  // }

  commitHabit(i) {
    if (this.done) {
      this.surveyService.saveResults(this.results);
      this.router.navigateByUrl('track');
    }
    // console.log(this.results, 'fdoj')
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
