import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SurveyService {
    results: any[] = []

   constructor(private http: HttpClient) {
    }

    public getSurvey(): Observable<any> {
        return this.http.get("./assets/json/survey-questions.json");
    }

    public saveResults(array: any[]) {
        for (let i = 0; i < array.length; i++) {  
            this.results[i] = array[i];
        }
        
        return localStorage.setItem('surveyResults', JSON.stringify(this.results));
    }

    public getResults(): any[] {
        return JSON.parse(localStorage.getItem('surveyResults'));
    }
}