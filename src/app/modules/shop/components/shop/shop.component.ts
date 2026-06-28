import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product, ProductServiceService} from "../../../../product-service.service";
import {ShopService} from "../../shop.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  displayProducts: Product[] = []
  productServiceCounter = 0;
  shopServiceCounter = 0;

  constructor(
    private route: ActivatedRoute,
    private navigation: Router,
    private productService : ProductServiceService,
    private shopService : ShopService
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      const category = params['category'];
      const rating = params['rating'];
      const minPrice = params['minPrice'];
      const maxPrice = params['maxPrice'];

      const filter = {
        category: category,
        rating: Number(rating),
        minPrice: Number(minPrice),
        maxPrice: Number(maxPrice),
      }
      console.log( filter);
      this.productService.getProductsByCategory(category)
        .subscribe( (response: any) => {
        this.displayProducts = response
      });
    })
  }

  public navigateToProduct(product: Product) {
    this.navigation.navigate(['/shop/product', product.id]);
  }

  public increment() {
    this.productService.increaseCounter();
    this.shopService.incrementCounter()
  }

  public update() {

    this.productServiceCounter = this.productService.getCounter();
    this.shopServiceCounter = this.shopService.getCounter();
  }
}
