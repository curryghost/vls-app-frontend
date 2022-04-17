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
import { AuthorDetailsComponent } from './comps/author-details/author-details.component';
import { AuthorComponent } from './pages/author/author.component';
import { JwtModule } from '@auth0/angular-jwt';
import { domain, port } from './services/apiString';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';

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
    SignUpComponent,
    AuthorDetailsComponent,
    AuthorComponent,
    MyCoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('jwtToken');
        },
        allowedDomains: [`${domain}:${port}`],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
