import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  isBrowser!: boolean;
  isServer!: boolean;
  registrationForm!: FormGroup;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private formBuilder:FormBuilder)
    
  {
    // this.isBrowser = isPlatformBrowser(this.platformId);
    // this.isServer = isPlatformServer(this.platformId);
  }

  // ngOninit():void {
  //   const namePattern = /^[A-Za-z]+$/;
  //   const phonePattern = /^[0-9]{9}$/;
  //   this.registrationForm = new FormGroup({
  //     firstname: new FormControl(['',[Validators.required,Validators.pattern(namePattern)]]),
  //     lastname: new FormControl(['',[Validators.required,Validators.pattern(namePattern)]]),
  //     email: new FormControl(['',[Validators.required,Validators.email]]),
  //     phone: new FormControl(['',Validators.required,Validators.pattern(phonePattern)])
  //   })
  // }
  // onSubmit(){
  //   if (this.registrationForm.valid) {
  //     console.log(this.registrationForm.value);
  //     // Process the form data
  //   } else {
  //     console.log('Form is invalid');
  //   }
 // }
  
}
