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
    });
  }

  initialize() {
    this.courseService.getCourses().subscribe((res) => {
      this.courses = res;
    });
  }

  getDuration(course: Course) {
    const startDate = course.courseStart;
    const endDate = course.courseEnd;

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
    return this.courses?.find((key: Course) => key.courseId == id);
  }

  // get the youtube thumbnail url from the video url
  getThumbnail(course: Course) {
    const courseVideoUrl = course.courseVideo;

    // http://img.youtube.com/vi/<insert-youtube-video-id-here>/default.jpg

    // app.controller('MyCtrl', ['$scope',
    //   function($scope) {
    //     $scope.inputs = [];

    //     $scope.addInput = function() {
    //       $scope.inputs.push({
    //         field: ''
    //       });
    //     }

    //     $scope.removeInput = function(index) {
    //       $scope.inputs.splice(index, 1);
    //     }

    //     $scope.set2 = function($ayd) {
    //       var thumb = getParameterByName(this.input.ayd, 'v'),
    //         url = 'http://img.youtube.com/vi/' + thumb + '/default.jpg';
    //       this.thumb = url
    //     }

    //     function getParameterByName(url, name) {
    //       name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    //       var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    //         results = regex.exec(url);
    //       return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    //     }
    //   }
    // ]);
  }
}
