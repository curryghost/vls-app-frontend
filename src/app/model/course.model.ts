import { Author } from './author.model';

export class Course {
  id?: number;
  name?: string;
  description?: string;
  start?: string;
  end?: string;
  cost?: number;
  content?: Array<any>;
  video?: string;
  authorId?: number;
  author?: Author;
}
