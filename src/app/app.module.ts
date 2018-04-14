import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, MatSidenavModule, BrowserAnimationsModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
