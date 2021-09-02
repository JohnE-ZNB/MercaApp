import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductsComponent} from './components/products/products.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { ProductCreateComponent } from './components/product-create/product-create.component'


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'crear',
    component: ProductCreateComponent,
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }