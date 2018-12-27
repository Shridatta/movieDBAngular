import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "./Movie";

@Component({
  selector: "display-movie",
  templateUrl: "./display-movie.component.html",
  styles: []
})
export class DisplayMovieComponent implements OnInit {
  @Input() movie: Movie;
  constructor() {}

  ngOnInit() {}

  getPosterUrl(path: string) {
    return "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/14264117_695196097300444_524144956292716341_n.jpg?_nc_cat=106&_nc_ht=scontent-lga3-1.xx&oh=09eb3d9dfe0e5b6ee4d058bc6a5b7706&oe=5CD7908C";
  }
}
