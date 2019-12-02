import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../user.model";
// import { HttpErrorHandler, HandleError } from "./http-error-handler.service";
import { Observable } from "rxjs";
export class Hero {
  id: number;
  name: string;
}
@Injectable({
  providedIn: "root"
})
export class DataService {
  // private handleError: HandleError;
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  baseURL = "https://movie-tickets-vinid.herokuapp.com/api";
  // private listMovieApi = "http://www.mocky.io/v2/5ddba5c83400005300eadcf7";
  // private movieDetails = "http://www.mocky.io/v2/5ddbb5483400005200eadd84";
  // private events = "http://www.mocky.io/v2/5ddde6382f000039617eaba5";
  // private tickets = " http://www.mocky.io/v2/5dddee8e2f000039617eabcb";
  // POST
  private adminLogin = "/auth";
  // GET
  private listMovieApi = "/movies";
  private movieDetails = "http://www.mocky.io/v2/5ddbb5483400005200eadd84";
  private events = "http://www.mocky.io/v2/5ddde6382f000039617eaba5";
  private tickets = " http://www.mocky.io/v2/5dddee8e2f000039617eabcb";

  constructor(
    private httpClient: HttpClient // httpErrorHandler: HttpErrorHandler
  ) {
    // this.handleError = httpErrorHandler.createHandleError("HeroesService");
  }

  public getListMovies() {
    return this.httpClient.get(this.baseURL + this.listMovieApi);
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

  public postAdminLogin(user: User): Observable<User> {
    return this.httpClient.post<User>(
      this.baseURL + this.adminLogin,
      user,
      this.httpOptions
    );
  }

  // getHeroes(): Observable<Hero[]> {
  //   return this.httpClient.get<Hero[]>(this.listMovieApi).pipe(
  //     tap(_ => this.log("fetched heroes")),
  //     catchError(this.handleError<Hero[]>("getHeroes", []))
  //   );
  // }
  // https://angular.io/tutorial/toh-pt6
}
