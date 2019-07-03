import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ResultsService {

    results: any[] = []

    constructor() {
    }

    public getResults(): any[] {
        return this.results;
    }

    public setResults(array: any[]) {
        for (let i = 0; i < array.length - 1; i++) {
            debugger;
            this.results[i] = array[i];
        }
        console.log(this.results);
    }
}