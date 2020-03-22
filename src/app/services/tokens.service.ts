import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Token } from '../models/token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokensService {

  private readonly url = `${environment.baseUrl}/user_tokens`;
  constructor(private http: HttpClient) { }

  index(): Observable<Token[]> {
    return this.http.get(this.url).pipe(
      map(r => (r as any).map(rr => new Token().fromJson(rr)))
    );
  }

  create(): Observable<any> {
    return this.http.post(this.url, {});
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
