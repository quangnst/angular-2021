import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  public loading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getProducts() {
    this.loading.next(true);
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any) => {
      this.loading.next(false);
      return res;
    }))
  }
  getProduct(id: any) {
    this.loading.next(true);
    return this.http.get<any>(`https://fakestoreapi.com/products/${id}`)
    .pipe(map((res:any) => {
      this.loading.next(false);
      return res;
    }))
  }
}
