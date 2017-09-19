import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter=0;
  ComponenetCounterValue;
  constructor(){
    //this.counter = 0;
    this.ComponenetCounterValue = this.counter;
  }
  setCounter() {
    this.counter = this.counter
  }
  showOutputData(event){
    this.ComponenetCounterValue = event;
  }

  title = 'app';
}
