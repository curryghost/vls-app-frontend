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
import { CourseDetailsComponent } from './comps/course-details/course-details.component';
import { CourseSignupComponent } from './pages/course-signup/course-signup.component';
import { LoginFormComponent } from './comps/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SummaryPipe } from './pipes/summary.pipe';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartListComponent } from './comps/cart-list/cart-list.component';
import { RemoveComponent } from './comps/cart-list/remove/remove.component';
import { CheckoutBtnComponent } from './comps/cart-list/checkout-btn/checkout-btn.component';
import { SignUpComponent } from './comps/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CourseComponent,
    AddToCartBtnComponent,
    LoginComponent,
    CourseDetailsComponent,
    CourseSignupComponent,
    LoginFormComponent,
    SummaryPipe,
    CheckoutComponent,
    CartListComponent,
    RemoveComponent,
    CheckoutBtnComponent,
<<<<<<< HEAD
    SignUpComponent
=======
>>>>>>> 2e53d3626190771bc9523409e40675b0fc12c402
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
<<<<<<< HEAD
=======
    FormsModule,
>>>>>>> 2e53d3626190771bc9523409e40675b0fc12c402
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
