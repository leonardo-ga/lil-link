import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Link } from '../../shared/models/link';
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
  link : Link | undefined;

  constructor() {
    this.linkId = Number(this.route.snapshot.params['id']);
    this.linksService.getLinkById(this.linkId).subscribe((link : Link) => {
      this.link = link;
    })
  }
}
