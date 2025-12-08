import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LilLinkLogoComponent } from "../../shared/ui/lil-link-logo/lil-link-logo.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, LilLinkLogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
