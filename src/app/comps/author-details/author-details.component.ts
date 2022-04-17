import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/model/author.model';
import { CourseStateService } from 'src/app/services/course-state.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss'],
})
export class AuthorDetailsComponent implements OnInit {
  author: Author | undefined;

  constructor(
    public courseState: CourseStateService,
    private route: ActivatedRoute
  ) {
    console.log('author details constructor has obtained the route');
  }

  getAuthor() {
    const routeParams = this.route.snapshot.paramMap;
    const authorIdFromRoute = Number(routeParams.get('id'));
    return this.courseState.getAuthor(authorIdFromRoute);
  }

  ngOnInit() {}
}
