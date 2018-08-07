import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { SixthElementSpeakingComponent } from './sixth-element-speaking/sixth-element-speaking.component';
import { SixthElementPlayerComponent } from './sixth-element-player/sixth-element-player.component';
import {TextToSpeechService} from './text-to-speech.service';
import {createCustomElement} from '@angular/elements';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SixthElementSpeakingComponent,
    SixthElementPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TextToSpeechService],
  bootstrap: [AppComponent],
  exports: [SixthElementSpeakingComponent],
  entryComponents: [SixthElementSpeakingComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(SixthElementSpeakingComponent, {injector});
    customElements.define('sixth-element-speaking', customElement);
  }
}
