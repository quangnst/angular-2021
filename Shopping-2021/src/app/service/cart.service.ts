import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = ["a"];
  public productList = new BehaviorSubject<string>("");
  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: any) {
    console.log("product", product)
    this.cartItemList.map((item: any) => {
      console.log("c1", item)
      if (product.id === item.id) {
        item.quantity++;
        console.log("a1", item)
      } else {
        console.log("b1", item)
        this.cartItemList.push(product);
      }
    })
    console.log("this.cartItemList", this.cartItemList)
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
