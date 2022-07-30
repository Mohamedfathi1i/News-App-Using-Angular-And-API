import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private _HttpClient: HttpClient) {}

  getnews(x:any): Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country='+x+'&category=sports&apiKey=2a7cde304b644c2a8b7d3c5719c8ebba');
  }
}
