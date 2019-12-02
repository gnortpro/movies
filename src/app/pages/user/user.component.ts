import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  title = "User";
  loggedUser = false;
  menuClick = false;
  openDialogLogin(): void {}
  toggleMobileClass(): void {
    this.menuClick = !this.menuClick;
  }
  constructor() {}

  ngOnInit() {}
}
