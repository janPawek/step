import { Component, OnInit } from '@angular/core';
import { IDishes, dessertDishes, mainDishes, beverageDishes, starterDishesDishes } from '../data';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit{
  mainDishes: IDishes[]=mainDishes;
  starterDishes: IDishes[]=starterDishesDishes;
  dessertDishes: IDishes[]=dessertDishes;
  beverageDishes: IDishes[]=beverageDishes;

  constructor(private CS : CartService){}

  addToCart(obj: IDishes){
    alert("success")
    this.CS.addToCart(obj);
  }

ngOnInit(): void {
  console.log(this.mainDishes);
  console.log(this.dessertDishes);
  // console.log(this.starterDishes);
  console.log(this.beverageDishes);
  
}
  

}
