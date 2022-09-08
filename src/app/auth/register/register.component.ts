import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRegisterModel } from '../models/IAuthRegister.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private _authService: AuthService, private _builder : FormBuilder) {
    this.formGroup = _builder.group({
      email: [null, [Validators.email, Validators.maxLength(386), Validators.required, Validators.minLength(1)]],
      firstname: [null, [Validators.minLength(1), Validators.maxLength(50), Validators.required]],
      lastname: [null, [Validators.minLength(1), Validators.maxLength(50), Validators.required]],
      password: [null, [Validators.minLength(6), Validators.maxLength(32), Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.formGroup.valid) return;
    let registerResult: IRegisterModel = {
      Email: this.formGroup.controls['email'].value,
      Password: this.formGroup.controls['password'].value,
      FirstName: this.formGroup.controls['firstname'].value,
      LastName: this.formGroup.controls['lastname'].value
    };
    this._authService.register(registerResult).subscribe({
      next: r => console.log(r),
      error: r => console.error(r)
    })
  }

}
