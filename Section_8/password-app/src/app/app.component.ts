import { Component } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'oldPassword': ['', Validators.required, PasswordValidators.check],
      'newPassword': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    }, {
      validator: PasswordValidators.match
    });
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  submit(f) {
    alert("Password changed");
  }
  
}
