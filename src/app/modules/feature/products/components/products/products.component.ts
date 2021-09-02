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
    //Debemos llamar al metodo de getAllProduct para que este a su vez llame al servicio
    this.getProductAll();
  }

  products: ProductModel[] = [];

  //Este metodo se encarga de hacer el llamado a servicio http
  getProductAll() {
    this.productsService.getAllProducts().subscribe((products) => {
      //this.product nuestro array que contendrá los productos y product es el array de la respuesta del servicio
      this.products = products;
      console.log(this.products);
    });
  }
}
