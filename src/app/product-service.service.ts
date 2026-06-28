import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products : Product[] = [];
  counter = 0;

  constructor( private apiService: ApiService ) {
    console.log("Product Service Created");
    this.loadProducts();
  }

  loadProducts(): void {
    console.log("Loading Products");
    this.apiService.apiGet("/products").subscribe( (value: any) => {
      if( value && value.products ) {
        this.products = value.products;
        console.log(this.products);
      }
    })
  }

  getAllProducts() {
    return this.products;
  }

  getFilteredProducts(filter: ProductFilter) {
    return this.products.filter(
      item => {
        return (
          (filter.category === undefined || item.category === filter.category) &&
          (filter.rating === undefined || isNaN(filter.rating) || item.rating === filter.rating) &&
          (filter.minPrice === undefined || isNaN(filter.minPrice) || item.price >= filter.minPrice ) &&
          (filter.maxPrice === undefined  || isNaN(filter.maxPrice) || item.price <= filter.maxPrice )
        );
      }
    );
  }

  getFeaturedProducts() : Observable<Product[]> {
    return this.apiService.apiGet<Product[]>("/products" ).pipe(
      map( (response: any) => response.products)
    )
  }

  getProductById(id: number): Observable<Product> {
    return this.apiService.apiGet<Product>(`/products/${id}` );
  }

  getProductsByCategory( category: string) :Observable<Product[]> {
    if( category  ) {
      return this.apiService.apiGet<Product[]>(
        `/products/category/${category}` ).pipe(
        map( (response: any) => response.products)
      )
    } else {
      return this.apiService.apiGet<Product[]>(
        `/products` ).pipe(
        map( (response: any) => response.products)
      )
    }

  }

  increaseCounter() {
    this.counter++;
  }

  getCounter() {
    return this.counter;
  }
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: string;
  rating: number;
  stock: number;
  tags: string[];
  thumbnail: string;
}

export interface ProductFilter {
  category: string;
  rating: number;
  minPrice: number;
  maxPrice: number;
}
