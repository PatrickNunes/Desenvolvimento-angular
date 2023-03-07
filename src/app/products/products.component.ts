import { Component } from '@angular/core';
import { Product } from '../product';
import { produtos } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = produtos;
  activeProduct?: Product;

  setActiveProduct(product:Product){
    this.activeProduct = product;
  }
}
