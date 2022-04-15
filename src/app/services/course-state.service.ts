import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root',
})
export class CourseStateService {
  courses: any;

  constructor(private courseService: CourseService) {
    this.courseService.getCourses().subscribe((res) => {
      this.courses = res;
      console.log(res);
    });
  }

  initialize() {
    this.courseService.getCourses().subscribe((res) => {
      this.courses = res;
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

  // get the youtube thumbnail url from the video url
  getThumbnail(course: Course) {
    const courseVideoUrl = course.video;

    // console.log(courseVideoUrl);
    // https://www.youtube.com/watch?v=kB8pG1-dIAA
    // http://img.youtube.com/vi/<insert-youtube-video-id-here>/sddefault.jpg

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
    const courseVideoUrl = course.video;

    // console.log(courseVideoUrl);
    // https://www.youtube.com/watch?v=kB8pG1-dIAA
    // http://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg

    const videoId = courseVideoUrl?.split('=')[1];

    if (videoId?.length == 11) {
      const thumbnailUrl = 'http://img.youtube.com/vi/' + videoId + '/0.jpg';
      return thumbnailUrl;
    } else {
      return '';
    }
  }
}
