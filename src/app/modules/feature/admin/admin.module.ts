import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DesignModule } from './../../design/design.module';


import { AdminRoutingModule } from './admin-routing.module';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductInventoryComponent } from './components/product-inventory/product-inventory.component';

@NgModule({
  declarations: [
    ProductCreateComponent,
    ProductInventoryComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    DesignModule,
  ],
})
export class AdminModule {}
