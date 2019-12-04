import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserAuth } from "../../models";
import { AuthenticationService } from "../../_services";
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  currentUser: UserAuth;
  checkUser = false;
  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  ngOnInit() {
    const checkUser = this.authenticationService.currentUserValue;
    this.checkUser = checkUser ? true : false;
  }
}
