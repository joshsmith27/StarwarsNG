import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharcterCardComponent } from './components/character-card/charcter-card.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterCardListComponent } from './components/character-card-list/character-card-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CharcterCardComponent,
    CharacterDetailsComponent,
    CharacterCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
