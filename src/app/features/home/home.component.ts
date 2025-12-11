import { Component, inject } from '@angular/core';
import { LinkShowerComponent } from '../../shared/link-shower/link-shower.component';
import { LinksService } from '../links.service';
import { SearchComponent } from "../../shared/search/search.component";
import { Router } from '@angular/router';
import { Link } from '../../shared/models/link';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LinkShowerComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private router: Router = inject(Router);
  linksService: LinksService = inject(LinksService);

  links!: Link[];
  protected searchCategories = ['/link', '/wishlist'];

  constructor() {
    this.linksService.getAllLinks().subscribe((links: Link[]) => {
      this.links = links;
    })
  }

  onSearch(toSearch: string[]) {
    if (toSearch.length < 2) return;
    this.router.navigate(toSearch);
  }

}
