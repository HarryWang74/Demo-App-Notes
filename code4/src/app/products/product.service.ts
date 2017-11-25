import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IProduct } from './i-product';

@Injectable()
export class ProductService {
  private _productUrl = 'api/productsInfo.json';
  constructor(private _http: Http) { }
  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._productUrl)
        .map((response: Response) => <IProduct[]> response.json())
        .do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
  }

  setRate(rate, id): Observable<IProduct[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post("api/product/" + id + "/" + rate, options)
        .map((response: Response) => <IProduct[]> response.json())
        .do(data => console.log('update: ' +  JSON.stringify(data)))
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
