import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Nos permite el modulo para hacer peticiones http
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importamos los modulos en el modulo principal
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';

//importamos el layout
import {DashboardComponent} from './layout/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
