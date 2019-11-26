import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private listMovieApi = "http://www.mocky.io/v2/5ddba5c83400005300eadcf7";
  private movieDetails = "http://www.mocky.io/v2/5ddbb5483400005200eadd84";

  constructor(private httpClient: HttpClient) {}

  public getListMovies() {
    return this.httpClient.get(this.listMovieApi);
  }
  public getMovieDetail(id) {
    return this.httpClient.get(this.movieDetails);
  }
}
