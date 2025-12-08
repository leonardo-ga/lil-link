import { Injectable } from '@angular/core';
import { LinksToShow } from '../shared/models/links-to-show';
import { LinkToShow } from '../shared/models/link-to-show';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  getAllLinks(): Observable<LinksToShow> {
    const url = this.baseUrl + "/links-to-show";
    return this.http.get<LinksToShow>(url);
  }

  getLinkById(id: number): Observable<LinkToShow> {
    const url = this.baseUrl + "/link-by-id/" + id;
    return this.http.get<LinkToShow>(url)
  }

  getLinkByShort(short: string): Observable<LinkToShow> {
    const url = this.baseUrl + "/link-by-short/" + short;
    return this.http.get<LinkToShow>(url);
  }

}
