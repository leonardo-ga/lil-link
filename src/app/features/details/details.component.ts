import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinkToShow } from '../../shared/models/link-to-show';
import { LinksService } from '../links.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  linksService: LinksService = inject(LinksService);
  linkId = -1;
  linkToShow : LinkToShow | undefined;

  constructor() {
    this.linkId = Number(this.route.snapshot.params['id']);
    this.linksService.getLinkById(this.linkId).subscribe((link : LinkToShow | undefined) => {
      this.linkToShow = link;
    })
  }
}
