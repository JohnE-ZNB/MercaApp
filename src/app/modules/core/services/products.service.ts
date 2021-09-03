import { Injectable } from '@angular/core';
//Nos permite usar un cliente de modulo que esta importado en app.module.ts
import { HttpClient } from '@angular/common/http';

//Importamos el modelo porque toca TIPAR la respuesta del servicio
import { ProductModel } from './../models/product.model'

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    //Inyectamos una dependencia para usar el cliente http
    private http: HttpClient
  ) {}

  getAllProducts() {
    return this.http.get<ProductModel[]>(`${environment.url_api}/productos`);
    
  }

  getProduct(id: string) {
    return this.http.get<ProductModel>(
      `${environment.url_api}/productos/${id}`
    );
  }

  createProduct(product: ProductModel) {
    return this.http.post(`${environment.url_api}/productos`, product);
  }

  updateProduct(id: string, changes: Partial<ProductModel>) {
    return this.http.put(`${environment.url_api}/productos/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/productos/${id}`);
  }
}
