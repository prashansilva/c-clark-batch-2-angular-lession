import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {BehaviorSubject, map, Observable, ReplaySubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userSubject = new Subject<string>();
  public userSubject1 = new BehaviorSubject<string>('prashan');
  public userSubject2 = new ReplaySubject<string>(2);

  constructor( private apiService: ApiService) { }

  checkUsername( username: string): Observable<boolean> {

    this.userSubject.next(username);
    return this.apiService.apiGet(`/users/search?q=${username}`).pipe(
      map( ( value ) => {
        return !!(value && value.users.length > 0);
      })
    );
  }
}
