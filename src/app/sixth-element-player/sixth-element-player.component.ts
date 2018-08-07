import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {TextToSpeechService} from '../text-to-speech.service';

@Component({
  selector: 'app-sixth-element-player',
  templateUrl: './sixth-element-player.component.html',
  styleUrls: ['./sixth-element-player.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SixthElementPlayerComponent {

  @Input() word: string;

  @Output() sound = new EventEmitter();

  constructor(private player: TextToSpeechService) {
  }

  public play(word) {
    this.player.playText(word);
    this.sound.next(word);
  }

}
