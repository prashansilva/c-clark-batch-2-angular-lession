import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "https://dummyjson.com"
  constructor( private http: HttpClient ) {

  }

 apiGet<T>( url : string, queryParams? : HttpParams ) : Observable<any> {
    return this.http.get( this.baseUrl + url , {
      params: queryParams
    })
 }

 apiPost<T>( url : string, body : any ) : Observable<any> {
    return this.http.post( this.baseUrl + url, body )
 }

  apiPut<T>( url : string, body : any ) : Observable<any> {
    return this.http.put( this.baseUrl + url, body )
  }

  apiDelete( url : string ) : Observable<any> {
    return this.http.delete( this.baseUrl + url )
  }
}
