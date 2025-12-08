import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, map, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class MockApiInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method } = req;

    if (url.endsWith('/api/links-to-show') && method === 'GET') {
      return this.fromJson('links-to-show.json');
    }

    // Matches /api/link-to-show/<any-number>
    const linkRegex = /\/api\/link-by-id\/\d+$/;
    if (linkRegex.test(req.url) && method === 'GET') {
      const id = req.url.split('/').pop();
      return this.fromJson('link-by-id_' + id + '.json');
    }

    // Matches /api/link-by-short/<any-string>
    const shortLinkRegex = /\/api\/link-by-short\/([A-Za-z0-9_-]+)$/;
    if (shortLinkRegex.test(req.url) && method === 'GET') {
      const short = req.url.split('/').pop();
      return this.fromJson('link-by-short_' + short + '.json');
    }

    // Matches /api/wishlist-by-name/<any-string>
    const wishlistNameLinkRegex = /\/api\/wishlist-by-name\/([A-Za-z0-9_-]+)$/;
    if (wishlistNameLinkRegex.test(req.url) && method === 'GET') {
      const name = req.url.split('/').pop();
      return this.fromJson('wishlist-by-name_' + name + '.json');
    }

    return next.handle(req);
  }

  private fromJson(file: string): Observable<HttpResponse<any>> {
    return from(fetch(`assets/mocks/${file}`).then(r => r.json()))
      .pipe(map(body => new HttpResponse({ status: 200, body })));
  }
}
