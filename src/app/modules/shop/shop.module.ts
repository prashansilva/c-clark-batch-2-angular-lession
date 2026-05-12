import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import {ShopComponent} from "./components/shop/shop.component";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ShopComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatIconModule
  ]
})
export class ShopModule { }
