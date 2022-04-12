import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from './material/material.module';
import { CourseComponent } from './comps/course/course.component';
import { AddToCartBtnComponent } from './comps/add-to-cart-btn/add-to-cart-btn.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, CourseComponent, AddToCartBtnComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
