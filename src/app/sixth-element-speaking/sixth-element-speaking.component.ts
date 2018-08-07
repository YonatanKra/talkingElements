import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sixth-element-speaking',
  templateUrl: './sixth-element-speaking.component.html',
  styleUrls: ['./sixth-element-speaking.component.css']
})
export class SixthElementSpeakingComponent implements OnInit {
  @Input() words = [];

  @Output() sound = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
