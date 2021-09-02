import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductInventoryComponent } from './components/product-inventory/product-inventory.component';

import { DesignModule } from './../../design/design.module';
import { ProductCreateComponent } from './components/product-create/product-create.component'

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductInventoryComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DesignModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
