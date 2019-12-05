import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  currentUser;
  constructor() {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser")).user;
  }
}
