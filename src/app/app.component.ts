import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {ProductService} from './product.service'
// import { Product } from '../../domain/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskcurd';
  availableProducts: any[] = [];
    selectedProducts: any [] = [];
    draggedProduct: any;
  constructor(
    private productService: ProductService,
    private _router :Router){

    }

  onNavigate(route:any){
     this._router.navigate([route])
  }


  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // this.selectedProducts = [];
    //     this.productService.getProductsSmall().then((products: any[]) => this.availableProducts = products);  
  }
//   dragStart(event: any,product: any) {
//     this.draggedProduct = product;
// }
// drop(event: any) {
//   if (this.draggedProduct) {
//       let draggedProductIndex = this.findIndex(this.draggedProduct);
//       this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
//       this.availableProducts = this.availableProducts.filter((val,i) => i!=draggedProductIndex);
//       this.draggedProduct = null;
//   }
// }
// dragEnd(event: any) {
//   this.draggedProduct = null;
// }
// findIndex(product:any) {
//   let index = -1;
//   for(let i = 0; i < this.availableProducts.length; i++) {
//       if (product.id === this.availableProducts[i].id) {
//           index = i;
//           break;
//       }
//   }
//   return index;
// }


}