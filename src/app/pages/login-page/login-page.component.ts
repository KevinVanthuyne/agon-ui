import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  @ViewChild('loginForm') private formDirective: NgForm | undefined;

  formError: string | undefined;
  readonly form = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  onSubmit() {
    this.authService
      .authenticate$(this.form.value.username!, this.form.value.password!)
      .subscribe({
        next: (authenticated) => {
          if (authenticated) {
            this.form.reset();
            this.formDirective?.resetForm();
          }
        },
        error: () => {
          this.formError = 'Invalid credentials';
        },
      });
  }
}
