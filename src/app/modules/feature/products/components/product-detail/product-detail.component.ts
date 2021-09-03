import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductModel } from './../../../../core/models/product.model';
import { ProductsService } from './../../../../core/services/products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  producto: ProductModel | any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parametros: Params) => {
      this.getProduct(parametros.id);
    });
  }

  getProduct(id: string) {
    this.productsService.getProduct(id).subscribe((responseProduct) => {
      this.producto = responseProduct;
    });
  }
}
