import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";


export const usernameValidator: AsyncValidatorFn = (
  control: AbstractControl
): Promise<ValidationErrors | null> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const unavailableUsernames = ['admin', 'root', 'prashan'];
      const username = control.value?.trim().toLowerCase();

      const usernameExists = unavailableUsernames.includes(username);

      resolve(
        usernameExists
          ? { usernameTaken: true }
          : null
      );
    }, 5000);
  });
};
