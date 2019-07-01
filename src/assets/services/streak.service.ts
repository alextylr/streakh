import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SurveyService {

   constructor(private http: HttpClient) {
        this.getSurvey().subscribe(data => {
            console.log(data);
        });
    }

     getSurvey(): Observable<any> {
        return this.http.get("./assets/json/survey-questions.json");
    }
}