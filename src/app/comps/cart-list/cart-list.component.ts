import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course.model';
import { CourseStateService } from 'src/app/services/course-state.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  constructor(
    public cartState: StateService,
    public courseState: CourseStateService
  ) {}

  ngOnInit(): void {}

  totalPrice() {
    let totalPrice = 0;
    this.cartState.cart.forEach((course) => {
      course.cost && (totalPrice += course.cost);
    });
    return totalPrice;
  }
}
