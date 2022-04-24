import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { TournamentListComponent } from './tournament-list/tournament-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TournamentListComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
