import { Author } from './author.model';

export class Course {
  courseId?: number;
  courseName?: string;
  courseDescription?: string;
  courseStart?: string;
  courseEnd?: string;
  courseCost?: number;
  courseVideo?: string;
  authorId?: number;
  author?: Author;
}
