import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  counter = 0;
  toggleCounter = false;

  constructor() { 
    if (this.counter == 0) {
      this.toggleCounter = true
    }
  }
}
