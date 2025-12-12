import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LilLinkLogoComponent } from "../../shared/ui/lil-link-logo/lil-link-logo.component";
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, LilLinkLogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public authService: AuthService) { }
}
