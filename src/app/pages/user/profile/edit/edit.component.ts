import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  user;
  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("currentUser")).user;
  }
}
