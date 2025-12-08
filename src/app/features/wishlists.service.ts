import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wishlist } from '../shared/models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistsService {

  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  getLinkByName(name: string): Observable<Wishlist> {
    const url = this.baseUrl + "/wishlist-by-name/" + name;
    return this.http.get<Wishlist>(url)
  }

}
