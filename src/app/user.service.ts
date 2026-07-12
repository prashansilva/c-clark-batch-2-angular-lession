import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private apiService: ApiService) { }

  checkUsername( username: string): Observable<boolean> {
    return this.apiService.apiGet(`/users/search?q=${username}`).pipe(
      map( ( value ) => {
        return !!(value && value.users.length > 0);
      })
    );
  }
}
