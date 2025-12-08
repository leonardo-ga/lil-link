import { Component, inject } from '@angular/core';
import { WishlistsService } from '../wishlists.service';
import { Wishlist } from '../../shared/models/wishlist';
import { ActivatedRoute } from '@angular/router';
import { LinkShowerComponent } from "../../shared/link-shower/link-shower.component";

@Component({
  selector: 'app-wishlist-sorter',
  standalone: true,
  imports: [LinkShowerComponent],
  templateUrl: './wishlist-sorter.component.html',
  styleUrl: './wishlist-sorter.component.css'
})
export class WishlistSorterComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  wishlistService: WishlistsService = inject(WishlistsService);
  link: string;
  wishlist!: Wishlist;

  constructor() {
    this.link = this.route.snapshot.params['link'];
    this.wishlistService.getLinkByName(this.link).subscribe((wishlist: Wishlist) => {
      this.wishlist = wishlist;
    });
  }
}
