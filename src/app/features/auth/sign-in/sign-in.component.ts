import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  // Simple regex to check email format
  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  private authService: AuthService = inject(AuthService);

  protected email = signal('');
  protected password = signal('');

  responseData: any;

  constructor() { }

  disableButton() {
    return !this.email()
      || !this.password()
      || !this.emailRegex.test(this.email());
  }

  onSignIn() {
    this.authService.signIn(this.email(), this.password()).then((data) => {
      this.responseData = data;
    });
  }

}
