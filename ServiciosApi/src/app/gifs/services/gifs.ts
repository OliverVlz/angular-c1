import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs(){
    this.http.get<GiphyResponse>(`${environment.urlBase}/gifs/trending`, {
      params: {
        api_key: environment.apiKey,
        limit: 40,
      }
    }).subscribe((response) => {
      //console.log(response.data[0].images.original.url);
      const gifs = GifMapper.mapGiphyItemsToArray(response.data);
      this.trendingGifs.set(gifs);
      console.log(gifs);
    });
  }
}
