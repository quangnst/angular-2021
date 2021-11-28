import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<string>("");
  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: any) {
    console.log("aaa")
    this.cartItemList.map((item: any) => {
      if (product.id === item.id) {
        item.quantity++;
        console.log(item)
      } else {
        console.log(this.cartItemList)
        this.cartItemList.push(product);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeCartItem(product: any) {
    this.cartItemList.map((item: any, index: number) => {
      if (product.id === item.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
}
