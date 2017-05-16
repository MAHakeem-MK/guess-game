import { Component } from '@angular/core';
@Component({
  selector: 'guess',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Dream';
  deviation: number;
  guess: number;
  noOfTries: number;
  original: number;
  constructor() {
    this.initializeGame();
  }
  initializeGame() {
    this.noOfTries = 0;
    this.original = Math.floor((Math.random() * 1000) + 1);
    this.guess = null;
    this.deviation = null;
  }
  verifyGuess() {
    this.deviation = this.original - this.guess;
    this.noOfTries = this.noOfTries + 1;
  }
}
