import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  welcome: boolean;
  started: boolean;
  // isLoaded: boolean;

  
  constructor(private router: Router){
    this.started = false;
    this.welcome = false;
  }


  ngOnInit() {
    setTimeout(() => {
      // this.isLoaded = false
      this.started = true;
    }, 3000);
    setTimeout(() => {
      // this.router.navigateByUrl('survey');
      this.welcome = true
    }, 5000);  //6s
  }



}
