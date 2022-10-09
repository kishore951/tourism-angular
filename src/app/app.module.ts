import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TamilnadutourismComponent } from './tamilnadutourism/tamilnadutourism.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlacesComponent } from './places/places.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {
    path:"",component:TamilnadutourismComponent
  },
  {
    path:"place",component:PlacesComponent
  },{
    path:"about",component:AboutComponent
  }
]
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
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
