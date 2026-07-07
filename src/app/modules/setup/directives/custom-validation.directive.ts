import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appCustomValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomValidationDirective),
      multi: true
    }
  ]
})
export class CustomValidationDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
        console.log( control);
        return {
          customError: true,
          minimumLength: 3,
        };
    }
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error('Method not implemented.');
    }

}
