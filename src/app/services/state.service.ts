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
    this.getLocalStorage()
    this.counter == 0 && (this.toggleCounter = true)
    console.log(this.cart)
  }
    getLocalStorage(){
      localStorage.getItem('cart') && this.cart.length == 0 && 
        this.cart.push(...JSON.parse(localStorage.getItem('cart')!));
      this.counter = this.cart.length;
    }  

    setLocalStorage(){
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }

    incrementCounter(){
      this.counter += 1;
      this.counter > 0 && (this.toggleCounter = false);
    }
  
    addToCart(course: Course){
      this.cart.push(course);
      this.setLocalStorage();
    }

    getByID(id: number){
      return this.cart.find(course => course.id == id);
    }

    remove(id: number){
      const index = this.cart.findIndex(course => course.id == id);
      this.cart.splice(index, 1);
      this.counter -= 1;
      this.counter == 0 && (this.toggleCounter = true);
      this.setLocalStorage();
    }
}
