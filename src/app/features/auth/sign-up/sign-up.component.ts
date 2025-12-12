import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

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

  onSignUp() {
    this.authService.signUp(this.email(), this.password()).then((data) => {
      this.responseData = data;
    });
  }

}
