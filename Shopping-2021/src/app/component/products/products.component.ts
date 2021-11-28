import { Component, OnInit } from '@angular/core';
import { ApiService  } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList: any;
  public filtersCategory: any;
  public isLoading: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProducts()
    .subscribe(res => {
      this.productList = res;
      this.filtersCategory = res;
    })

    this.api.loading
    .subscribe(res => {
      this.isLoading = res;
    })
  }
}
