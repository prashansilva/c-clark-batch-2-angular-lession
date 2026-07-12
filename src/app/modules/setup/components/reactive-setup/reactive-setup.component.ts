import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {customValidator} from "../../validations/custom.validator";
import {parameterValidator} from "../../validations/parameter.validator";
import {passwordStrengthValidator} from "../../validations/password-strength.validator";
import {usernameValidator} from "../../validations/asynchronus.validator";
import {UserService} from "../../../../user.service";
import {usernameExistsValidator} from "../../validations/username-check.validator";

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

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) { }


  studentFrom = this.fb.group({
    username: [
      '',
      {
       validators: [Validators.required, passwordStrengthValidator],
       asyncValidators: [usernameExistsValidator(this.userService)],
       updateOn: 'blur'
      }
    ],
    firstName: ['', [Validators.required, customValidator] ],
    lastName: ['', Validators.required],
    email: ['', [ Validators.required, Validators.email , parameterValidator(["gmail" , "yahoo"]) ]],
    password: ['', [Validators.required , passwordStrengthValidator ]],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required],
    })
  })

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

  onSubmitStudentForm() {
    this.studentFrom.markAsTouched();
    console.log( this.studentFrom)
    if( this.studentFrom.valid) {
      console.log( "Valid" );
      console.log( this.studentFrom.value );
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

  get studentPassword() {
    return this.studentFrom.get('password');
  }

  get username() {
    return this.studentFrom.get('username');
  }

}


type SkillForm = FormGroup<{
  name: FormControl<string>;
  value: FormControl<string>;
}>;

type CourseForm = FormGroup<{
  name: FormControl<string>;
  value: FormControl<string>;
}>;
