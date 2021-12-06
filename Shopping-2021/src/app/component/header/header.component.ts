import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public totalItem: any = 0;
  public cartItems: any = [];

  constructor(
    private cartService: CartService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.document.body.classList.remove('cart-opened');
      }
    });
  }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
        this.cartItems = res;
        console.log(res);
      })

  }

  toggleCartModal() {
    this.document.body.classList.toggle('cart-opened');
  }

  removeCartItem(item: any) {
    this.cartService.removeCartItem(item);
  }

}
