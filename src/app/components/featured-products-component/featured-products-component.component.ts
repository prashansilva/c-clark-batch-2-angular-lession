import {Component, OnInit} from '@angular/core';
import {Product, ProductServiceService} from "../../product-service.service";

@Component({
  selector: 'app-featured-products-component',
  templateUrl: './featured-products-component.component.html',
  styleUrls: ['./featured-products-component.component.scss']
})
export class FeaturedProductsComponentComponent implements OnInit {

  products: Product[] = []


  constructor( private productService: ProductServiceService) {
  }

  ngOnInit() {

    this.productService.getFeaturedProducts().subscribe(
      ( response: Product[] ) => {
      console.log( response );
      this.products = response;
    })
  }
}
