import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductCategoryModel } from './../../../../core/models/productCategory.model'
import { customValidators } from './../../../../../utils/validators'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  formulario: FormGroup = new FormGroup({});
  categorys: ProductCategoryModel[] = [
    { value: 'Tecnología', viewValue: 'Tecnología' },
    { value: 'Comida', viewValue: 'Comida' },
    { value: 'Objetos', viewValue: 'Objetos' },
    { value: 'Deporte', viewValue: 'Deporte' },
    { value: 'Otros', viewValue: 'Otros' },
  ];

  constructor(private formBuilder: FormBuilder) {
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
    return this.formulario.get('cantidad');
  }
}
