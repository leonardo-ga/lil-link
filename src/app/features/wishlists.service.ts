import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wishlist } from '../shared/models/wishlist';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistsService {

  private baseUrl = environment.apiBaseUrl + '/wishlist';

  constructor(private http: HttpClient) { }

  getLinkByName(name: string): Observable<Wishlist> {
    const url = this.baseUrl + "/get-by-name/" + name;
    return this.http.get<Wishlist>(url)
  }

}
