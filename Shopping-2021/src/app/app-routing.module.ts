import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
