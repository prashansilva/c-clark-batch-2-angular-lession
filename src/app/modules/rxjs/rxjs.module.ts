import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './components/basic/basic.component';
import {RxjsRoutingModule} from "./rxjs-routing.module";



@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    RxjsRoutingModule,
    CommonModule
  ]
})
export class RxjsModule { }
