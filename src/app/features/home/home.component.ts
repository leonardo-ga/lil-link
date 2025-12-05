import { Component, inject } from '@angular/core';
import { LinkShowerComponent } from '../../shared/link-shower/link-shower.component';
import { LinksToShow } from '../../shared/models/links-to-show';
import { LinkToShow } from '../../shared/models/link-to-show';
import { LinksService } from '../links.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LinkShowerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  linksToShow!: LinksToShow;
  linksService : LinksService = inject(LinksService);

  constructor() {
    this.linksService.getAllLinks().subscribe((links : LinksToShow) => {
      this.linksToShow = links;
    })
  }

}
