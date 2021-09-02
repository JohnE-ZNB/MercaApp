import { Component, Input, OnInit } from '@angular/core';

import { ProductModel } from './../../../../core/models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() producto: ProductModel = Input();
}
