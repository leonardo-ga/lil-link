import { Component, input } from '@angular/core';
import { LinksToShow } from '../models/links-to-show';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-shower',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './link-shower.component.html',
  styleUrl: './link-shower.component.css'
})
export class LinkShowerComponent {

  linksToShow = input.required<LinksToShow>();

}
