export interface GiphyResponse {
  data: GiphyItem[];
}

export interface GiphyItem {
  id: string;
  title: string;
  images: GiphyItemImage;
}

export interface GiphyItemImage {
  original: {
    url: string;
  };
}

export interface GiphyItemImageOriginal {
  url: string;
}
