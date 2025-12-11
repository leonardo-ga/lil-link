import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Link } from '../models/link';

@Component({
  selector: 'app-link-shower',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './link-shower.component.html',
  styleUrl: './link-shower.component.css'
})
export class LinkShowerComponent {

  links = input.required<Link[]>();

}
