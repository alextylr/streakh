import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatSliderModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SurveyComponent } from './survey/survey.component';
import { SurveyQuestionsComponent } from './survey/survey-questions/survey-questions.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './survey/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyQuestionsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule, 
    MatSliderModule,
    MatFormFieldModule,
    RouterModule.forRoot([
        { path: 'survey', component: SurveyComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: 'survey-questions', component: SurveyQuestionsComponent },
        { path: '',   redirectTo: '/welcome', pathMatch: 'full' }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
