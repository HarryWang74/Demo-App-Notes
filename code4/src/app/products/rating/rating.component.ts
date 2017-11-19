import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }
  maxRating:number = 5;
  @Input() rate: number;
  ngOnInit() {
  }

  getMaxRating = function(){
    return new Array(this.maxRating);
  }

  changeRate = function(index){
    this.rate = index + 1;
  }
}
