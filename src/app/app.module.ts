import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesCardComponent } from './notes-card/notes-card.component';
import { ParentCardsComponent } from './parent-cards/parent-cards.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpService } from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    NotesCardComponent,
    ParentCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
