import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TamilnadutourismComponent } from './tamilnadutourism/tamilnadutourism.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlacesComponent } from './places/places.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TamilnadutourismComponent,
    NavbarComponent,
    PlacesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
