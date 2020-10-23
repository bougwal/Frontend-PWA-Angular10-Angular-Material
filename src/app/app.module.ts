import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatBadgeModule}from '@angular/material/badge';
import {MatButtonModule}from '@angular/material/button';
import {MatCardModule}from '@angular/material/card';
import {MatDialogModule}from '@angular/material/dialog';
import {MatIconModule}from '@angular/material/icon';
import {MatListModule}from '@angular/material/list';
import {MatSelectModule}from '@angular/material/select';
import {MatSidenavModule}from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import  {MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

const matDesignModules = [ MatToolbarModule, MatButtonModule,
    MatSidenavModule, MatIconModule, MatListModule, MatCardModule,
    MatSelectModule, MatDialogModule, MatBadgeModule, MatSnackBarModule ];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...matDesignModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
