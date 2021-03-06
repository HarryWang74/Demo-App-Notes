import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { IProduct } from '../i-product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct[];
  productID: number;
  errorMessage: string;
  constructor(
    private route: ActivatedRoute,
    private _productService: ProductService) {
      this.route.params.subscribe(params => {
        // console.log(params) //log the entire params object
        // console.log(params['id']) //log the value of id
        this.productID = params['id'];
        // console.log(this.productID);
        // debugger;

      })
  }

  ngOnInit() {
    this._productService.getDetail(this.productID).subscribe(
      product =>this.product = product,
      error => this.errorMessage = <any>error
    );
  }
}
