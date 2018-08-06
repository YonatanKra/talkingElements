import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TextToSpeechService} from '../text-to-speech.service';

@Component({
  selector: 'app-sixth-element-player',
  templateUrl: './sixth-element-player.component.html',
  styleUrls: ['./sixth-element-player.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SixthElementPlayerComponent implements OnInit {

  @Input() word: string;

  constructor(private player: TextToSpeechService) {
  }

  ngOnInit() {
  }

  public play(word) {
    this.player.playText(word);
  }
}
