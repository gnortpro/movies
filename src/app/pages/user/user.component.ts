import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../_services";
import { UserAuth } from "src/app/models";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  title = "User";
  currentUser: UserAuth;
  checkUser = false;
  menuClick = false;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  ngOnInit() {
    const checkUser = this.authenticationService.currentUserValue;
    this.checkUser = checkUser ? true : false;
    // this.loggedUser = JSON.parse(localStorage.getItem("currentUser")).user;
  }

  toggleMobileClass(): void {
    this.menuClick = !this.menuClick;
  }
}
