import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {UserService} from "../../../user.service";
import {catchError, map, Observable, of, switchMap, take, timer} from "rxjs";


export function usernameExistsValidator(
  userService: UserService
): AsyncValidatorFn {
  return (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {

    const username = String(control.value ?? '').trim();

    if (!username) {
      return of(null);
    }

    return timer(400).pipe(
      switchMap(() =>
        userService.checkUsername(username)
      ),

      map((exists: boolean) => {
        return exists
          ? {
            usernameTaken: {
              value: username,
              message: 'This username is already registered.'
            }
          }
          : null;
      }),

      catchError(error => {
        console.error('Username validation failed:', error);

        // Usually allow the user to continue when the server fails.
        return of(null);
      }),

      take(1)
    );
  };
}
