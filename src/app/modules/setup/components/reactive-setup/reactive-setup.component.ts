import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-setup',
  templateUrl: './reactive-setup.component.html',
  styleUrls: ['./reactive-setup.component.scss']
})
export class ReactiveSetupComponent {

  nameField = new FormControl(
    'Prashan', [Validators.required , Validators.minLength(6)]);


  addressForm = new FormGroup(
    {
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      zip: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    }
  )

  constructor() { }

  onSubmit() {
    this.addressForm.markAsTouched();
    if( this.addressForm.valid) {
      console.log( "Valid" );
      console.log( this.addressForm.value );
    } else {
      console.log( "Invalid" );
    }
  }
}
