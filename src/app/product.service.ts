import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductsSmall: any;

  constructor(private _http:HttpClient) { }

  
  
}
