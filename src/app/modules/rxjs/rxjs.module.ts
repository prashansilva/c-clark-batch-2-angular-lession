import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './components/basic/basic.component';
import {RxjsRoutingModule} from "./rxjs-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    RxjsRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RxjsModule { }
