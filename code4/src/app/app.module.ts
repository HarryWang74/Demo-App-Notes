import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import{ HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { RatingComponent } from './products/rating/rating.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AboutComponent,
    ProductFilterPipe,
    RatingComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: '**', redirectTo: 'products', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
