import {AbstractControl,  ValidationErrors, ValidatorFn} from "@angular/forms";

export const customValidator: ValidatorFn = (
  control: AbstractControl) : ValidationErrors | null => {

  const value = control.value;
  if (value && value.length < 10) {
    return {
      customMinLength: {
        requiredLength: 10,
        actualLength: value.length,
        message: 'Minimum length is 10 characters.',
      },
    };
  }
  return null;
}
