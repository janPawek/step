import { Component, OnInit } from '@angular/core';
import { IDishes } from '../data';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart : IDishes[]= [];

  constructor(private CS:CartService){}

  ngOnInit(): void {
   this.cart = this.CS.showCart();
  }

}


// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';
// import { IDishes } from '../IDishes';
// @Component({
//   selector: 'app-order',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })

// export class OrderComponent implements OnInit {
//   items: IDishes[] = [];
//   total: number = 0;
//   service: number = 0;
//   subtotal: number = 0;
//   totalAfterDiscount: number = 0;

//   constructor(private cartService: CartService) {}

//   ngOnInit(): void {
//     this.items = this.cartService.getItems();
//     this.subtotal = this.cartService.getTotal();
//     this.service = Math.floor(this.cartService.getTotal()/10);
//     this.total = this.subtotal + this.service;
//     this.totalAfterDiscount = Math.floor(this.total * 0.85);
//   }
// }
