import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

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

  applicationForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      address: new FormGroup(
        {
          street: new FormControl('', [Validators.required]),
          city: new FormControl('', [Validators.required]),
          country: new FormControl('', [Validators.required, Validators.maxLength(100)]),
          zip: new FormControl('', [Validators.required, Validators.maxLength(6)]),
        }
      ),
      skills: new FormArray<SkillForm>(
        [ this.createSkill() ]
      )
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

  onSubmitApplication() {
    this.applicationForm.markAsTouched();
    console.log( this.applicationForm)
    if( this.applicationForm.valid) {
      console.log( "Valid" );
      console.log( this.applicationForm.value );
    } else {
      console.log( "Invalid" );
    }
  }

  createSkill(): SkillForm {
    return new FormGroup({
      name: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      }),
      value: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      })
    });
  }

  getSkills() {
    return this.applicationForm.controls.skills.controls;
  }

  addNewSkill() {
    this.applicationForm.controls.skills.push(this.createSkill());
  }

}


type SkillForm = FormGroup<{
  name: FormControl<string>;
  value: FormControl<string>;
}>;
