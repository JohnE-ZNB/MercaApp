import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../../../core/services/products.service';
import { ProductModel } from './../.././../../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    //Debemos llamar al metodo de getAllProduct para que este a su vez llame al servicio y traiga la informacion
    this.getProductAll();
  }

  products: ProductModel[] = [];

  getProductAll() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
      console.log(this.products);
    });
  }
}
