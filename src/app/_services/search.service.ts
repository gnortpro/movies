import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private httpClient: HttpClient) {}

  public search(keyword: string) {
    return this.httpClient.get(
      `${environment.apiUrl}/movies/?search=` + keyword
    );
  }
}
