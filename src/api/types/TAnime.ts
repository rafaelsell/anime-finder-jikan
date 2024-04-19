export type TAnime = {
  data: Data;
};
type Data = {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: any[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background?: any;
  season?: any;
  year?: any;
  broadcast: Broadcast;
  producers: any[];
  licensors: any[];
  studios: any[];
  genres: Genre[];
  explicit_genres: any[];
  themes: any[];
  demographics: any[];
  relations: any[];
  theme: Theme;
  external: Ixternal[];
  streaming: any[];
};
type Ixternal = {
  name: string;
  url: string;
};
type Theme = {
  openings: any[];
  endings: any[];
};
type Genre = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};
type Broadcast = {
  day?: any;
  time?: any;
  timezone?: any;
  string?: any;
};
type Aired = {
  from: string;
  to?: any;
  prop: Prop;
  string: string;
};
type Prop = {
  from: From;
  to: To;
};
type To = {
  day?: any;
  month?: any;
  year?: any;
};
type From = {
  day: number;
  month: number;
  year: number;
};
type Title = {
  type: string;
  title: string;
};
type Trailer = {
  youtube_id?: any;
  url?: any;
  embed_url?: any;
  images: Images2;
};
type Images2 = {
  image_url?: any;
  small_image_url?: any;
  medium_image_url?: any;
  large_image_url?: any;
  maximum_image_url?: any;
};
type Images = {
  jpg: Jpg;
  webp: Jpg;
};
type Jpg = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};
