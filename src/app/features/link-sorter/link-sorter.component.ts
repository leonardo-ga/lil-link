import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinksService } from '../links.service';
import { Link } from '../../shared/models/link';

@Component({
  selector: 'app-link-sorter',
  standalone: true,
  imports: [],
  templateUrl: './link-sorter.component.html',
  styleUrl: './link-sorter.component.css'
})
export class LinkSorterComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  linksService: LinksService = inject(LinksService);
  shortUrl: string;
  link: Link | undefined;

  constructor() {
    this.shortUrl = this.route.snapshot.params['link'];
    this.linksService.getLinkByShort(this.shortUrl).subscribe((link: Link) => {
      this.link = link;
      if (!!this.link && !!this.link.originalUrl) {
        window.location.href = this.link?.originalUrl;
      }
      //TODO: see if we can redirect faster...
      //TODO: make loading/waiting page??
    });
  }
}
