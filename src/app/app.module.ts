import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

const appRoutes: Routes = [
  {path: '', component: SidenavComponent},
  {path: '/friends', component: FriendFinderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    RacesComponent,
    RunningBuddyComponent,
    FriendFinderComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, MatSidenavModule, BrowserAnimationsModule, MatListModule, MatExpansionModule,
    MatFormFieldModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
