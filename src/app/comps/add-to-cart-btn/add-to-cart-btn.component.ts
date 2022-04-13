import { Component, OnInit } from '@angular/core';
import { CourseStateService } from 'src/app/services/course-state.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-add-to-cart-btn',
  templateUrl: './add-to-cart-btn.component.html',
  styleUrls: ['./add-to-cart-btn.component.css']
})
export class AddToCartBtnComponent implements OnInit {
  addToCartMsg = "Add to Cart";
  toggleBtn = false;

  constructor(public state : StateService, public courseState: CourseStateService) { }

  addToCart(){
    this.state.incrementCounter();
    this.toggleBtn = true;
    this.addToCartMsg = "Added to Cart"
    console.log(this.courseState.getCourse(1))
  }

  ngOnInit(): void {
  }

}
