import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  isLoaded: boolean;
  
  constructor(private router: Router){
    this.isLoaded = true;
  }
  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = false
    }, 3000);
    setTimeout(() => {
      this.router.navigateByUrl('survey');
    }, 5000);  //6s
  }



}
