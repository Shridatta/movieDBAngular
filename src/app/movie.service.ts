import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { Movie } from "./Movie";

@Injectable()
export class MovieService {
  private selectedMovie$: Subject<Movie> = new Subject<Movie>();
  private apiKey: string = "16c7ac5a745691fcb615134a5d34cefb";
  private baseApiUrl: string = "http://api.themoviedb.org/3/search/movie";

  constructor(private http: HttpClient) {}

  get currentMovie() {
    return this.selectedMovie$;
  }

  searchMovie(query: string) {
    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("query", query);
    return this.http
      .get<any>(`${this.baseApiUrl}`, { params })
      .map(res => res.results);
  }
  changeSelectedMovie(movie: Movie) {
    this.selectedMovie$.next(movie);
  }
}
