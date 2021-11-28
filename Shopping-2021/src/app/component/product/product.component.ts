import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService  } from 'src/app/service/api.service';
import { CartService  } from 'src/app/service/cart.service';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product: any = [];
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  public isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private cartService: CartService,
  ) {
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.api.getProduct(productId)
    .subscribe(res => {
      this.product = res;
      Object.assign(this.product,  {quantity: 1, total: this.product.price});
    })

    this.api.loading
    .subscribe(res => {
      this.isLoading = res;
    })

    // Carousel
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    this.galleryImages = [
      {
        small: 'assets/images/products/zoom/product-1.jpg',
        medium: 'assets/images/products/zoom/product-1-big.jpg',
        big: 'assets/images/products/zoom/product-1-big.jpg'
      },
      {
        small: 'assets/images/products/zoom/product-2.jpg',
        medium: 'assets/images/products/zoom/product-2-big.jpg',
        big: 'assets/images/products/zoom/product-2-big.jpg'
      },
      {
        small: 'assets/images/products/zoom/product-3.jpg',
        medium: 'assets/images/products/zoom/product-3-big.jpg',
        big: 'assets/images/products/zoom/product-3-big.jpg'
      }
    ];
  }

  addTocart(product: any) {
    this.cartService.addToCart(product);
  }

}
