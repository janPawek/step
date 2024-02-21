import { Injectable } from '@angular/core';
import { IDishes } from './data';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: IDishes[] = [];
  
  constructor() { }

  addToCart (obj: IDishes){
    this.cart.push(obj);
  }
  showCart (){
    return this.cart
  }

  lengthOfTheCart(){
    return this.cart.length;
  }
}


