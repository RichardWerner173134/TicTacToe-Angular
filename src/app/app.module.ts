import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FieldComponent } from './components/field/field.component';
import { GameBoardComponent } from './components/game-board/game-board.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
