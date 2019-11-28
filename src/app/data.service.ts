import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private listMovieApi = "http://www.mocky.io/v2/5ddba5c83400005300eadcf7";
  private movieDetails = "http://www.mocky.io/v2/5ddbb5483400005200eadd84";
  private events = "http://www.mocky.io/v2/5ddde6382f000039617eaba5";
  private tickets = " http://www.mocky.io/v2/5dddee8e2f000039617eabcb";
  constructor(private httpClient: HttpClient) {}

  public getListMovies() {
    return this.httpClient.get(this.listMovieApi);
  }
  public getMovieDetail(id) {
    return this.httpClient.get(this.movieDetails);
  }
  public getEvents() {
    return this.httpClient.get(this.events);
  }
  public getMovieShedule(movieID, day) {
    console.log("movie ID: " + movieID + " day: " + day);
    return this.httpClient.get(this.tickets);
  }
}
