import { Injectable } from '@angular/core';
import { responsiveVoice } from '../assets/responsiveVoice';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  private responsiveVoice = responsiveVoice;
  constructor() { }

  playText(word) {
    this.responsiveVoice.speak(word);
  }
}
