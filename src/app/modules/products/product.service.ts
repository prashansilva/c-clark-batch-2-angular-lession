import { Injectable } from '@angular/core';
import {ApiService} from "../../api.service";
import {delay, map, Observable} from "rxjs";
import {Product} from "../../product-service.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) { }

  searchProducts(term: string): Observable<any> {
    return this.apiService.apiGet(`/products/search?q=${term}`).pipe(
      delay(5000),
      map(response => response.products ? response.products : []),
    )
  }


  deleteProduct(id: number): Observable<any> {
    return this.apiService.apiDelete(`/products/${id}`).pipe()
  }

  updateProduct( id: number, product: Product ): Observable<any> {
    return this.apiService.apiPut(`/products/${id}`, product).pipe()
  }
}
