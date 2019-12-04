import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie, Theater } from "../models";
import { environment } from "../../environments/environment";
export class Hero {
  id: number;
  name: string;
}
@Injectable({
  providedIn: "root"
})
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  baseURL = "https://movie-tickets-vinid.herokuapp.com/api";
  // private getListMovieApi = "http://www.mocky.io/v2/5ddba5c83400005300eadcf7";
  // private movieDetails = "http://www.mocky.io/v2/5ddbb5483400005200eadd84";
  // private events = "http://www.mocky.io/v2/5ddde6382f000039617eaba5";
  // private tickets = " http://www.mocky.io/v2/5dddee8e2f000039617eabcb";
  // POST
  private adminLogin = "/auth";
  private creatMovie = "/movies";
  // GET
  private getListMovieApi = "/movies";
  private getSingleMovie = "/movies";
  private movieDetails = "http://www.mocky.io/v2/5ddbb5483400005200eadd84";
  private events = "http://www.mocky.io/v2/5ddde6382f000039617eaba5";
  private tickets = " http://www.mocky.io/v2/5dddee8e2f000039617eabcb";

  constructor(
    private httpClient: HttpClient // httpErrorHandler: HttpErrorHandler
  ) {
    // this.handleError = httpErrorHandler.createHandleError("HeroesService");
  }

  public getListMovies() {
    return this.httpClient.get(`${environment.apiUrl}/movies`);
  }
  public getMovieDetail(id) {
    return this.httpClient.get(`${environment.apiUrl}/movies/` + id);
  }
  public getTheaterList() {
    return this.httpClient.get(`${environment.apiUrl}/theaters`); // lấy danh sách các rạp chiếu phim
  }
  public createTheater(theater) {
    return this.httpClient.post<Theater>(
      `${environment.apiUrl}/theaters`,
      {
        ...theater
      },
      this.httpOptions
    );
  }
  public getEvents() {
    return this.httpClient.get(this.events);
  }
  public getMovieShedule(movieID, day) {
    return this.httpClient.get(this.tickets);
  }
  public postCreateMovie(movie: Movie) {
    return this.httpClient.post<Movie>(
      `${environment.apiUrl}/movies`,
      {
        ...movie
      },
      this.httpOptions
    );
  }
}
