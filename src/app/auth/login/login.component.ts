import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILoginModel } from '../models/IAuthLogin.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup

  constructor(private _builder: FormBuilder, private _authService: AuthService) {
    this.formGroup = _builder.group({
      email: [null, [Validators.email, Validators.maxLength(386), Validators.minLength(1), Validators.required]],
      password: [null, [Validators.required, Validators.maxLength(32), Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.formGroup.valid) return;
    let loginResult: ILoginModel = {
      Email: this.formGroup.controls['email'].value,
      Password: this.formGroup.controls['password'].value
    };
    this._authService.login(loginResult).subscribe({
      next: r => console.log(r),
      error: r => console.error(r)
    })
  }

}
