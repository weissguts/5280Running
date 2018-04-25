import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RacesComponent } from './races/races.component';
import { RunningBuddyComponent } from './running-buddy/running-buddy.component';
import {Routes, RouterModule} from '@angular/router';
import { FriendFinderComponent } from './friend-finder/friend-finder.component';
import { HomeComponent } from './home/home.component';
import {RacesModel} from './races/races.model';

// const appRoutes: Routes = [
//   {path: '', component: HomeComponent},
//   {path: 'friends', component: FriendFinderComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    RacesComponent,
    RunningBuddyComponent,
    FriendFinderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, MatSidenavModule, BrowserAnimationsModule, MatListModule, MatExpansionModule,
    MatFormFieldModule, HttpClientModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
