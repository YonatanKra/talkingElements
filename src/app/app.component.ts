import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private elRef: ElementRef) {

  }
  ngOnInit() {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://code.responsivevoice.org/responsivevoice.js';
    document.head.appendChild(scriptElement);
  }
}
