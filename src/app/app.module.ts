import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyBY6rsMSEHewNl78rTQuk0JhzPgaysf0NU',
      libraries : ['places','drawing','geometry']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
