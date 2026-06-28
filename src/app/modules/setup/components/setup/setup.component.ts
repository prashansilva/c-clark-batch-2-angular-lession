import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent {

  categories = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Mobile' },
    { id: 3, name: 'Camera' }
  ];
  public product : ProductForm = {
    title: "Smart Product",
    price: 1,
    address: {
      no : "1",
      street: "sda",
      city: "Moratuwa",
      country: "Sri Lanka",
    }

  }

  constructor() {

  }

  onSubmit(form: NgForm) {
    console.log('onSubmit');
    console.log(form);
    console.log(form.value);
    console.log(form.valid);
    console.log(form.invalid);
    console.log("Dirty : " + form.dirty);
    console.log("Pristine : " +form.pristine);
    console.log("Touch : " + form.touched);
    console.log("Untouch : " +form.untouched);

   console.log( form.controls["name"]?.value);

   console.log( this.product)
  }
}


export interface ProductForm {
  title: string;
  price: number;
  address : {
    no: string;
    street: string;
    city: string;
    country: string;
  }
}
