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
    if(originalPath.startsWith('/link/')) {
      const short = originalPath.split('/')[2];
      this.router.navigate(['/link', short]);
    }
  }
}
