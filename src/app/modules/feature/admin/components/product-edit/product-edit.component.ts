import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductCategoryModel } from './../../../../core/models/productCategory.model';
import { ProductsService } from './../../../../core/services/products.service';

//Importamos una validación personalizada que creamos
import { customValidators } from './../../../../../utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  formulario: FormGroup = new FormGroup({});
  id: string = '';
  categories: ProductCategoryModel[] = [
    { value: 'Tecnologia', viewValue: 'Tecnologia' },
    { value: 'Comida', viewValue: 'Comida' },
    { value: 'Objetos', viewValue: 'Objetos' },
    { value: 'Otra', viewValue: 'Otra' },
  ];

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.builderForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe((product) => {
        this.formulario.patchValue(product);
      });
    });
  }

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
      const productoModificado = this.formulario.value;
      this.productsService
        .updateProduct(this.id, productoModificado)
        .subscribe((modProduct) => {
          console.log(modProduct);
          //Cuando la respuesta se positiva del servicio entons redireccionamos
          this.router.navigate(['./admin']);
        });
    }
  }
}
