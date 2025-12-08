import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./features/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lil-link';

  private router: Router = inject(Router);

  constructor() {
    const originalPath = window.location.hash.replace('#', '');
    const link = originalPath.split('/')[2];
    if(originalPath.startsWith('/link/')) {
      this.router.navigate(['/link', link]);
    } else if(originalPath.startsWith('/wishlist/')) {
      this.router.navigate(['/wishlist', link]);
    }
  }
}
