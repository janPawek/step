import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { onErrorResumeNext } from 'rxjs';
import { OverviewComponent } from './overview/overview.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: "", component: OverviewComponent},
  {path:"cart",component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
