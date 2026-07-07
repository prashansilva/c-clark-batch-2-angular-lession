import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './components/setup/setup.component';
import {SetupRoutingModule} from "./setup-routing.module";
import {FormsModule} from "@angular/forms";
import { CustomValidationDirective } from './directives/custom-validation.directive';



@NgModule({
  declarations: [
    SetupComponent,
    CustomValidationDirective
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    FormsModule
  ]
})
export class SetupModule { }
