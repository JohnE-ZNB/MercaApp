import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './layout/product/product.component'
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '', //<- esta en blanco entonces lo redirecciona a productos
        redirectTo: 'productos',
        pathMatch: 'full',
      },
      {
        path: 'productos',
        loadChildren: () =>
          import('./modules/feature/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/feature/admin/admin.module').then(
            (m) => m.AdminModule
          ),
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
