import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../../../core/services/products.service';
import { ProductModel } from './../.././../../core/models/product.model';

@Component({
  selector: 'app-product-inventory',
  templateUrl: './product-inventory.component.html',
  styleUrls: ['./product-inventory.component.scss'],
})
export class ProductInventoryComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'descripcion',
    'categoria',
    'precio',
    'cantidad',
    'accion',
  ];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProductAll();
  }

  products: ProductModel[] = [];

  getProductAll() {
    this.productsService.getAllProducts().subscribe((products) => {
      //this.product nuestro array que contendrá los productos y product es el array de la respuesta del servicio
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe((response) => {
      //this.product nuestro array que contendrá los productos y product es el array de la respuesta del servicio
      console.log(response);
      this.getProductAll();
    });
  }
}
