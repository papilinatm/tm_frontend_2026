import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    login: '',
    password: ''
  };
  
  hidePassword = true;
  errorMessage: string = '';

  constructor(
    private _auth: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.errorMessage = '';

    this._auth.login(this.credentials).subscribe({
      next: () => {
        this._auth.sendTestRequest();
        this.cdr.detectChanges();
      },
      error: (err) => {
        if (err.status === 401) {
          this.errorMessage = "Wrong login/password";
        } else {
          this.errorMessage = `Something went wrong (${err.status || 'unknown error'})`;
        }
        this.cdr.detectChanges();
      }
    });
  }
}
