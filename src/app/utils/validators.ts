import { AbstractControl, ValidatorFn } from '@angular/forms';

export class customValidators {
  static isPriceValid(control: AbstractControl) {
    const valor = control.value;
    if (valor < 1) {
      return { price_invalid: true };
    }
    return null;
  }

  static isInventoryValid(control: AbstractControl) {
    const valor = control.value;
    if (valor < 0) {
      return { inventory_invalid: true };
    }
    return null;
  }
}

