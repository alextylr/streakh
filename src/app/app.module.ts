import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatSliderModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SurveyComponent } from './survey/survey.component';
import { SurveyQuestionsComponent } from './survey/survey-questions/survey-questions.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './survey/welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { SurveyService } from 'src/assets/services/streak.service';
import { TrackerComponent } from './tracker/tracker.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ResultsService } from 'src/assets/services/results.service';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyQuestionsComponent,
    WelcomeComponent,
    TrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    RouterModule.forRoot([
      { path: 'survey', component: SurveyComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'survey-questions', component: SurveyQuestionsComponent },
      { path: 'track', component: TrackerComponent },
      { path: '', redirectTo: '/welcome', pathMatch: 'full' }
    ])
  ],
  providers: [SurveyService, ResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
