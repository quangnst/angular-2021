import { Component, OnInit } from '@angular/core';
import { CartService  } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: any = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res => {
      this.products = res;
    })
  }

  removeCartItem(item: any) {
    this.cartService.removeCartItem(item);
  }

}
