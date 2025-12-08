import { Component, inject } from '@angular/core';
import { LinkShowerComponent } from '../../shared/link-shower/link-shower.component';
import { LinksToShow } from '../../shared/models/links-to-show';
import { LinksService } from '../links.service';
import { SearchComponent } from "../../shared/search/search.component";
import { Router } from '@angular/router';

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

  linksToShow!: LinksToShow;
  protected searchCategories = ['/link', '/wishlist'];

  constructor() {
    this.linksService.getAllLinks().subscribe((links: LinksToShow) => {
      this.linksToShow = links;
    })
  }

  onSearch(toSearch: string[]) {
    if (toSearch.length < 2) return;
    this.router.navigate(toSearch);
  }

}
