import { Injectable } from '@angular/core';
import { Link } from '../shared/models/link';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  private baseUrl = environment.apiBaseUrl + '/link';

  constructor(private http: HttpClient) { }

  getAllLinks(): Observable<Link[]> {
    const url = this.baseUrl + "/get-all";
    return this.http.get<Link[]>(url);
  }

  getLinkById(id: number): Observable<Link> {
    const url = this.baseUrl + "/get-by-id/" + id;
    return this.http.get<Link>(url);
  }

  getLinkByShort(short: string): Observable<Link> {
    const url = this.baseUrl + "/get-by-short/" + short;
    return this.http.get<Link>(url);
  }

}
