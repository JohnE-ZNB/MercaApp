import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './layout/dashboard/dashboard.component'
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '', //localhost:4200/    <- esta en blanco entonces lo redirecciona a inicio
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
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
