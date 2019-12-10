import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable } from "rxjs";
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
  private events = "http://www.mocky.io/v2/5ddde6382f000039617eaba5";

  constructor(
    private httpClient: HttpClient // httpErrorHandler: HttpErrorHandler
  ) {}

  public getListMovies(limit: number, page: number) {
    if (page < 1) {
      page = 1;
    }
    return this.httpClient.get(
      `${environment.apiUrl}/movies/?limit=` +
        limit +
        `&page=` +
        page +
        `&sort=premiereAt`
    );
  }

  public getListMoviesByIMDB() {
    return this.httpClient.get(
      `${environment.apiUrl}/movies/?limit=5&page=1&sort=imdbScore`
    );
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
  public getMovieDetail(id) {
    return this.httpClient.get(`${environment.apiUrl}/movies/` + id);
  }
  public deleteMovie(id) {
    return this.httpClient.delete(`${environment.apiUrl}/movies/` + id);
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
  public getTheaterDetail(id) {
    return this.httpClient.get(`${environment.apiUrl}/theaters/` + id);
  }
  public getAuditoriumList(theaterID: number) {
    return this.httpClient.get(
      `${environment.apiUrl}/theaters/` + theaterID + `/auditoriums`
    ); // lấy danh sách các rạp chiếu phim
  }
  public createAuditoriumByTheaterID(theaterID, auditorium) {
    return this.httpClient.post(
      `${environment.apiUrl}/theaters/` + theaterID.theaterID + `/auditoriums`,
      {
        ...auditorium
      },
      this.httpOptions
    );
  }
  public getSchedule(movieID: number) {
    return this.httpClient.get(
      `${environment.apiUrl}/movies/` + movieID + `/schedules`
    ); // lấy danh sách các rạp chiếu phim
  }
  public postScheduleByDay(movieID: number, day: string) {
    return this.httpClient.post(
      `${environment.apiUrl}/movies/` + movieID + `/schedules/available`,
      {
        day
      },
      this.httpOptions
    );
  }
  public getSeatsByScheduleID(movieID: number, scheduleID: number) {
    return this.httpClient.get(
      `${environment.apiUrl}/movies/` +
        movieID +
        `/schedules/` +
        scheduleID +
        `/seats`
    ); // lấy danh sách các rạp chiếu phim
  }

  public postSubmitBuyTicket(movieID: number, ticketID: number) {
    return this.httpClient.get(
      `${environment.apiUrl}/movies/` +
        movieID +
        `/schedules/` +
        ticketID +
        `/seats`
    ); // lấy danh sách các rạp chiếu phim
  }

  public postNewReservation(data) {
    return this.httpClient.post(
      `${environment.apiUrl}/reservations`,
      {
        ...data
      },
      this.httpOptions
    );
  }

  public getBookedLastReservation(reservationId: number) {
    return this.httpClient.get(
      `${environment.apiUrl}/reservations/` + reservationId
    ); // lấy danh sách các rạp chiếu phim
  }
  public postPurchase(id: number) {
    return this.httpClient.post(
      `${environment.apiUrl}/reservations/` + id + `/checkout`,
      {
        id
      },
      this.httpOptions
    );
  }
  public putUpdateMovie(id: number, obj: any) {
    return this.httpClient.put(
      `${environment.apiUrl}/movies/` + id,
      {
        ...obj
      },
      this.httpOptions
    );
  }

  public putUpdateTheater(id: number, obj: any) {
    return this.httpClient.put(
      `${environment.apiUrl}/theaters/` + id,
      {
        ...obj
      },
      this.httpOptions
    );
  }
  public getAllReservations() {
    return this.httpClient.get(`${environment.apiUrl}/reservations/`);
  }
  public getEvents() {
    return this.httpClient.get(this.events);
  }
}
