import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor(private _productService: ProductService) {};
  maxRating:number = 5;
  @Input() rate: number;
  @Input() id: number;
  ngOnInit() {
  }

  getMaxRating = function(){
    return new Array(this.maxRating);
  }

  changeRate = function(index){
    this.rate = index + 1;
    this._productService.setRate(this.rate, this.id).subscribe(
      rate =>this.rate = rate,
      error => this.errorMessage = <any>error
    );
  }
}
