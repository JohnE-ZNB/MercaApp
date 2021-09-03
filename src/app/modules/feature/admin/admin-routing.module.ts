import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product-create/product-create.component'
import { ProductInventoryComponent } from './components/product-inventory/product-inventory.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProductInventoryComponent,
  },
  {
    path: 'crear',
    component: ProductCreateComponent,
  },
  {
    path: 'editar/:id',
    component: ProductEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
