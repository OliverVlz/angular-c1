import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GifsService } from '../../services/gifs';
import { GifList } from '../../components/gif-list/gif-list';

@Component({
  selector: 'app-search-page',
  imports: [FormsModule, GifList],
  templateUrl: './search-page.html',
  styles: ``
})
export default class SearchPage {
  private gifsService = inject(GifsService);

  searchQuery = signal<string>('');
  searchGifs = this.gifsService.searchGifs;
  isLoading = this.gifsService.isLoading;

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    const query = target.value.trim();
    this.searchQuery.set(query);

    if (query.length >= 2) {
      this.gifsService.searchGifsByQuery(query);
    } else if (query.length === 0) {
      this.gifsService.searchGifs.set([]);
    }
  }
}
