import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { Author } from '../model/author.model';
import { CourseService } from './course.service';
import { AuthorService } from './author.service';

@Injectable({
  providedIn: 'root',
})
export class CourseStateService {
  courses: any;
  authors: any;
  filterString = '';
  filteredCourses: Array<any> = [];

  constructor(
    private courseService: CourseService,
    private authorService: AuthorService
  ) {
    this.courseService.getCourses().subscribe((res) => {
      this.courses = res;
      console.log(res);
    });

    this.authorService.getAuthors().subscribe((res) => {
      this.authors = res;
      console.log(res);
    });
  }

  initialize(): void {
    this.courseService.getCourses().subscribe((res) => {
      this.courses = res;
    });
    this.authorService.getAuthors().subscribe((res) => {
      this.authors = res;
    });
  }

  getDuration(course: Course) {
    const startDate = course.start;
    const endDate = course.end;

    const startDateArr = startDate?.split(',')[0].split('-');
    const endDateArr = endDate?.split(',')[0].split('-');

    const [dayS, monthS, yearS] = startDateArr!;
    const startDateMinutes = new Date(+yearS, +monthS, +dayS).getTime();
    const [dayE, monthE, yearE] = endDateArr!;
    const endDateMinutes = new Date(+yearE, +monthE, +dayE).getTime();

    const durationHours =
      (endDateMinutes - startDateMinutes) / 1000 / 60 / 60 / 24;
    return durationHours;
  }

  getCourse(id: number) {
    return this.courses?.find((key: Course) => key.id == id);
  }

  getCourseAuthor(authorId: number) {
    const author = this.getAuthor(authorId);
    return author;
  }

  getAuthor(authorId: number) {
    return this.authors?.find((key: Author) => key.id == authorId);
  }

  // get the youtube thumbnail url from the video url
  getThumbnail(course: Course) {
    // console.log(courseVideoUrl);
    // https://www.youtube.com/watch?v=kB8pG1-dIAA
    // http://img.youtube.com/vi/<insert-youtube-video-id-here>/sddefault.jpg
    const courseVideoUrl = course.video;
    const videoId = courseVideoUrl?.split('=')[1];

    if (videoId?.length == 11) {
      const thumbnailUrl =
        'http://img.youtube.com/vi/' + videoId + '/sddefault.jpg';
      return thumbnailUrl;
    } else {
      return '';
    }
  }

  getHqThumbnail(course: Course) {
    // console.log(courseVideoUrl);
    // https://www.youtube.com/watch?v=kB8pG1-dIAA
    // http://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg
    const courseVideoUrl = course.video;
    const videoId = courseVideoUrl?.split('=')[1];

    if (videoId?.length == 11) {
      const thumbnailUrl = 'http://img.youtube.com/vi/' + videoId + '/0.jpg';
      return thumbnailUrl;
    } else {
      return '';
    }
  }

  // courseSearch(searchValue: string) {
  //   const courseList = this.courses;
  //   let filteredCourses = [];

  //   courseList.forEach((course: any) => {
  //     const isVisible = course.name.toLowerCase().includes(searchValue)

  //     course.element
  //   });
  // }

  filterQuery(query: any) {
    this.filteredCourses.splice(0, this.filteredCourses.length);
    this.filteredCourses.push(
      ...this.courses.filter((course: any) =>
        course.name.toLowerCase().includes(query.value.toLowerCase())
      )
    );
    console.log(this.filteredCourses);
  }
}
