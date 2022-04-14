import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  counter = 0;
  toggleCounter = false;
  cart: Course[] = []

  constructor() { 
    this.counter == 0 && (this.toggleCounter = true)

  }
    incrementCounter(){
      this.counter += 1;
      this.counter > 0 && (this.toggleCounter = false);
    }
  
    addToCart(course: Course){
      this.cart.push(course)
    }

    getByID(id: number){
      return this.cart.find(course => course.id == id)
    }
}
