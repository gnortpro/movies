import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { UserAuth, User } from "../models";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<UserAuth[]>(`${environment.apiUrl}/users`);
  }

  public postCreateUser(user: User) {
    return this.http.post<User>(`${environment.apiUrl}/user/signup`, {
      ...user
    });
  }
}
