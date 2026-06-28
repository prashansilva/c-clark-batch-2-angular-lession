import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, ProductServiceService} from "../../../../product-service.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductServiceService) {

  }

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    if (productId) {
      this.productService.getProductById(productId).subscribe( product => {
        this.product = product;
      })
    }
  }
}
