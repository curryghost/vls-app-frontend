import { Component, OnInit } from '@angular/core';
import { CourseStateService } from 'src/app/services/course-state.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-add-to-cart-btn',
  templateUrl: './add-to-cart-btn.component.html',
  styleUrls: ['./add-to-cart-btn.component.css'],
})
export class AddToCartBtnComponent implements OnInit {
  addToCartMsg = 'Add to Cart';
  toggleBtn = false;

  constructor(
    public state: StateService,
    public courseState: CourseStateService
  ) {}

  addToCart() {
    this.state.incrementCounter();
    this.toggleBtn = true;
    this.addToCartMsg = 'Added to Cart';
    this.courseState.getDuration({
      courseId: 1,
      courseName: '.NET Core',
      courseDescription: 'random string',
      courseStart: '20-04-2022, 09:00',
      courseEnd: '25-04-2022, 09:00',
      courseCost: 59.9,
      courseVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      authorId: 1,
      author: {
        authorId: 0,
        authorName: 'Bob',
        emailAddress: 'bob@gmail.com',
      },
    });
  }

  ngOnInit(): void {}
}
