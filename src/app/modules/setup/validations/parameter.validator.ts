import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";


export function parameterValidator(
  forbiddenDomains: string[]
): ValidatorFn {
  return (
    control: AbstractControl
  ): ValidationErrors | null => {
    const value = String(control.value ?? '')
      .trim()
      .toLowerCase();

    if (!value) {
      return null;
    }
    console.log( forbiddenDomains );


    let isForbidden = false;


    forbiddenDomains.forEach(domain => {
      if( value.includes( domain ) ) {
        isForbidden = true;
      }
    })


    console.log( isForbidden );
    return isForbidden
      ? {
        forbiddenDomains: {
          enteredValue: control.value
        }
      }
      : null;
  };
}
