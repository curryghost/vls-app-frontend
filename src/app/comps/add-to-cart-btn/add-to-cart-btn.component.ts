import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-add-to-cart-btn',
  templateUrl: './add-to-cart-btn.component.html',
  styleUrls: ['./add-to-cart-btn.component.css']
})
export class AddToCartBtnComponent implements OnInit {
  addToCartMsg = "Add to Cart";
  toggleBtn = false;

  constructor(public state : StateService) { }

  addToCart(){
    this.state.incrementCounter();
    this.toggleBtn = true;
    this.addToCartMsg = "Added to Cart"
  }

  ngOnInit(): void {
  }

}
