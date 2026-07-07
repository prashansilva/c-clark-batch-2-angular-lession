import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './components/setup/setup.component';
import {SetupRoutingModule} from "./setup-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CustomValidationDirective } from './directives/custom-validation.directive';
import { ReactiveSetupComponent } from './components/reactive-setup/reactive-setup.component';



@NgModule({
  declarations: [
    SetupComponent,
    CustomValidationDirective,
    ReactiveSetupComponent
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SetupModule { }
