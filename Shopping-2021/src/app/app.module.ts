import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGalleryModule } from 'ngx-gallery-9';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductsComponent } from './component/products/products.component';
import { BannerComponent } from './component/banner/banner.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { ToolboxComponent } from './component/toolbox/toolbox.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { LoadingComponent } from './component/loading/loading.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    BannerComponent,
    BreadcrumbComponent,
    ToolboxComponent,
    PaginationComponent,
    ProductComponent,
    CartComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    NgxGalleryModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
