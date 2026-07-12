import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";


export const passwordStrengthValidator: ValidatorFn = (
  control: AbstractControl) : ValidationErrors | null => {

  const password = String(control.value ?? '');

  if( !password ) {
    return null;
  }

  const hasUpperCase = /[A-Z]/.test(control.value);
  const hasLowerCase = /[a-z]/.test(control.value);
  const hasNumber = /[0-9]/.test(control.value);
  const hasSpecialCharacters = /[!@#$&^*]/.test(control.value);

  const valid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacters;

  if( !valid) {
    return {
      passwordStrength: {
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSpecialCharacters
      }
    }
  }
  return null;
}
