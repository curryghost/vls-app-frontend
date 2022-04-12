import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  counter = 0;
  toggleCounter = false;

  constructor() { 
    this.counter == 0 && (this.toggleCounter = true)

  }
    incrementCounter(){
      this.counter += 1;
      this.counter > 0 && (this.toggleCounter = false);
    }
}
