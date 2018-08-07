import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public phrases = [
    'Leelo Dallas Muti Pass',
    'I sixth element - supreme being!'
  ];

  public phrase = '';

  constructor() {

  }
  ngOnInit() {
  }

  public getExcitedFromWord(word) {
    console.log(`He said ${word}!!!`);
  }

  public speak() {
    this.phrases.push(this.phrase);
  }
}
