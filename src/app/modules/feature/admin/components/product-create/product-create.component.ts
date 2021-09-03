import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductCategoryModel } from './../../../../core/models/productCategory.model';
import { ProductsService } from './../../../../core/services/products.service';

//Importamos una validación personalizada que creamos
import { customValidators } from './../../../../../utils/validators';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  formulario: FormGroup = new FormGroup({});
  selectedValue!: string;
  categories: ProductCategoryModel[] = [
    { value: 'Tecnologia', viewValue: 'Tecnologia' },
    { value: 'Comida', viewValue: 'Comida' },
    { value: 'Objetos', viewValue: 'Objetos' },
    { value: 'Otra', viewValue: 'Otra' },
  ];

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {
    this.builderForm();
  }

  ngOnInit(): void {}

  private builderForm() {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      precio: ['', [Validators.required, customValidators.isPriceValid]],
      cantidad: ['', [Validators.required, customValidators.isInventoryValid]],
    });
  }

  get campoPrecio() {
    return this.formulario.get('precio');
  }

  get campoCantidad() {
    return this.formulario.get('precio');
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.formulario.valid) {
      const productoNuevo = this.formulario.value;
      this.productsService.createProduct(productoNuevo).subscribe((newProduct)=>{
        //Cuando la respuesta se positiva del servicio entons redireccionamos
        this.router.navigate(['./admin']);
      })
      
    }
  }
}
