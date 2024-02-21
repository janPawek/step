import { Component, DoCheck } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements DoCheck {
number: number = 0;

constructor(private CS :CartService){}

ngDoCheck(){
  this.number = this.CS.lengthOfTheCart();
}
}
