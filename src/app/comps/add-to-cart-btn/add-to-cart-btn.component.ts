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
  addToCartMsg = "Add to Cart";
  course: any;
  toggleBtn = false;
  id!: number;

  constructor(
    public state: StateService,
    public courseState: CourseStateService,
    private route: ActivatedRoute
  ) {
  }
  getPrice(){
    this.route.params.subscribe(param => this.id = +param['id'])
    if (this.state.getByID(this.id)){
      this.toggleBtn = true
      return "Added to cart"
    } else {
      const course = this.courseState.getCourse(this.id)
      return`\$${course.cost.toFixed(2)}`
    }
  }
  addToCart() {
    this.state.incrementCounter();
    this.toggleBtn = true
    const course = this.courseState.getCourse(this.id)
    this.state.addToCart(course)
  }

  ngOnInit(): void {
    this.getPrice();
  }
}
