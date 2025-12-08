import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinksService } from '../links.service';
import { LinkToShow } from '../../shared/models/link-to-show';

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
  link: string;
  linkToShow: LinkToShow | undefined;

  constructor() {
    this.link = this.route.snapshot.params['link'];
    this.linksService.getLinkByShort(this.link).subscribe((link: LinkToShow | undefined) => {
      this.linkToShow = link;
      if (!!this.linkToShow && !!this.linkToShow.original) {
        window.location.href = this.linkToShow?.original;
      }
      //TODO: see if we can redirect faster...
      //TODO: make loading/waiting page??
    });
  }
}
