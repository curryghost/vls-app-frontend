import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CourseSignupComponent } from './pages/course-signup/course-signup.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AuthorComponent } from './pages/author/author.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent },
  {
    path: 'my-courses',
    component: MyCoursesComponent,
    canActivate: [AuthGuard],
  },
  { path: 'course-signup/:id', component: CourseSignupComponent },
  { path: 'author/:id', component: AuthorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
