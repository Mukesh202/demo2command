import { Component, OnInit } from '@angular/core';


export interface Product {
    id : any,
    category:any,
    name :any,
    price :any
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  availableProducts: any[] =[];
    
  selectedProducts: any[] =[];
  
  draggedProduct: any;
  
  constructor() { }
  
  ngOnInit() {
      this.selectedProducts = [
        {
          id : 1,
    category:'branch ',
    name :'bank',
    price :"100"
        },
        {
          id : 1,
    category:'branch',
    name :'bank',
    price :"200"
        },
        {
          id : 1,
    category:'branch',
    name :'bank',
    price :"500"
        },
        {
          id : 1,
    category:'branch',
    name :'bank',
    price :"200"
        },
      ];

      this.availableProducts = [
        {
          id : 1,
    category:'branch ',
    name :'bank ',
    price :"400"
        },
        {
          id : 1,
    category:'branch',
    name :'bank ',
    price :"300"
        },
        {
          id : 1,
    category:'branch',
    name :'bank',
    price :"500"
        },
      ]
  }
  
  dragStart(event:any,product: any) {
      this.draggedProduct = product;
  }
  
  drop(event:any) {
      if (this.draggedProduct) {
          let draggedProductIndex = this.findIndex(this.draggedProduct);
          this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
          this.availableProducts = this.availableProducts.filter((val,i) => i!=draggedProductIndex);
          this.draggedProduct = null;
      }
  }
  
  dragEnd(event:any) {
      this.draggedProduct = null;
  }
  
  findIndex(product: any) {
      let index = -1;
      for(let i = 0; i < this.availableProducts.length; i++) {
          if (product.id === this.availableProducts[i].id) {
              index = i;
              break;
          }
      }
      return index;
  }

  adduser(){}
}
