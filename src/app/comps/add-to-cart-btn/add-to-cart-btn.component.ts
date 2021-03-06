import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseStateService } from 'src/app/services/course-state.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-add-to-cart-btn',
  templateUrl: './add-to-cart-btn.component.html',
  styleUrls: ['./add-to-cart-btn.component.css'],
})
export class AddToCartBtnComponent implements OnInit {
  addToCartMsg = 'Add to Cart';
  course: any;
  toggleBtn = false;
  id!: number;

  constructor(
    public state: StateService,
    public courseState: CourseStateService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((param) => (this.id = +param['id']));
    this.getPrice();
  }
  getPrice() {
    const course = this.courseState.getCourse(this.id);

    if (this.state.getByID(this.id)) {
      this.toggleBtn = true;
      return 'Added to cart';
    } else if (course?.cost.toFixed(2) == 0.0) {
      return 'Enroll for Free';
    } else {
      return `Enroll for \$${course?.cost.toFixed(2)}`;
    }
  }
  addToCart() {
    this.state.incrementCounter();
    this.toggleBtn = true;
    const course = this.courseState.getCourse(this.id);
    this.state.addToCart(course);
  }

  ngOnInit(): void {}
}
