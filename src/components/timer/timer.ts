import { Component } from '@angular/core';


@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})
export class TimerComponent {

  text: string;

  constructor() {
    console.log('Hello TimerComponent Component');
    this.text = 'Hello World';
  }

}
