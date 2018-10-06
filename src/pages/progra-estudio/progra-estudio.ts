import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PTimer } from '../../model/Ptimer';


@IonicPage()
@Component({
  selector: 'page-progra-estudio',
  templateUrl: 'progra-estudio.html',
})
export class PrograEstudioPage {

  private timeInSeconds: number;
  public timer: PTimer;
  constructor() {
  }

  ngOnInit() {
    this.initTimer();
  }

  hasFinished() {
    return this.timer.hasFinished;
  }

  initTimer() {
    if (!this.timeInSeconds) { this.timeInSeconds = 1500; }

    this.timer = <PTimer>{
      time: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      timeRemaining: this.timeInSeconds
    };
    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.timeRemaining);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }


  startTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  timerTick() {
    setTimeout(() => {

      if (!this.timer.runTimer) { return; }
      this.timer.timeRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.timeRemaining);
      if (this.timer.timeRemaining > 0) {
        this.timerTick();
      }
      else {
        this.timer.hasFinished = true;
      }
    }, 1000);
  }


  // hasFinished() {
  //   return this.timer.hasFinished;
  // }
  pauseTimer() {
    this.timer.runTimer = false;
  }

  resumeTimer() {
    this.startTimer();
  }

}