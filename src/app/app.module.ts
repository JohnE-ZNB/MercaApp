import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
//Nos permite el modulo para hacer peticiones http
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importamos los modulos en el modulo principal y compartido
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';

//importamos el layouts
import { ProductComponent } from './layout/product/product.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent, DashboardComponent, ProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
