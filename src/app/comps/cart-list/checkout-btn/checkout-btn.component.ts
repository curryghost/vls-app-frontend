import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-checkout-btn',
  templateUrl: './checkout-btn.component.html',
  styleUrls: ['./checkout-btn.component.css']
})
export class CheckoutBtnComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, public cart: StateService) { }

  ngOnInit(): void {
  }
  
  checkoutHandler(){
    this.cart.clearCart()
    this.snackBar.open("You've bought the item!!!", 'close', {duration: 2000})
    //api goes here
  }
}
