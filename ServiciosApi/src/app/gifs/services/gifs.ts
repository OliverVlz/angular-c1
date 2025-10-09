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
  searchGifs = signal<Gif[]>([]);
  isLoading = signal<boolean>(false);

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
      const gifs = GifMapper.mapGiphyItemsToArray(response.data);
      this.trendingGifs.set(gifs);
      console.log(gifs);
    });
  }

  searchGifsByQuery(query: string){
    if (!query.trim()) {
      this.searchGifs.set([]);
      return;
    }

    this.isLoading.set(true);
    this.searchGifs.set([]);

    this.http.get<GiphyResponse>(`${environment.urlBase}/gifs/search`, {
      params: {
        api_key: environment.apiKey,
        q: query,
        limit: 20,
      }
    }).subscribe({
      next: (response) => {
        const gifs = GifMapper.mapGiphyItemsToArray(response.data);
        this.searchGifs.set(gifs);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error en la búsqueda:', error);
        this.searchGifs.set([]);
        this.isLoading.set(false);
      }
    });
  }
}
