import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {
  catchError, concatMap,
  debounceTime,
  distinctUntilChanged, exhaustMap,
  from,
  map,
  mergeMap,
  Observable,
  of, scan,
  startWith,
  switchMap, toArray
} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../../../product-service.service";
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  searchControl = new FormControl('', { nonNullable: true });
  public products: Product[] = [ { id: 1} as Product , { id: 2 } as Product];

  products$: Observable<Product[]> = this.searchControl.valueChanges.pipe(
    startWith(''), // Wait until the user pauses typing.
    debounceTime(300), // Remove unnecessary spaces.
    map(term => term.trim()), // Do not search twice for the same value.
    distinctUntilChanged(), // Cancel the previous search stream and use the latest one.
    exhaustMap(term => {
      if (!term) {
        return of([]);
      }
      return this.productService.searchProducts(term) .pipe(
      catchError(error => {
        console.error('Search failed', error); return of([]);
      }) );
    }));


  constructor(private http: HttpClient , private productService: ProductService) { }


  deleteProducts(productIds: number[]) {
    from(productIds).pipe(
      mergeMap(
        productId => this.productService.deleteProduct(productId), 3),
      toArray()
    ).subscribe( {
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      }
    });
  }


  updateProducts() {
    from(this.products).pipe(
      concatMap(
        product => this.productService.updateProduct(product.id, product )),
      toArray()
    ).subscribe( {
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
