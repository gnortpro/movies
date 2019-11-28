import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  users = {
    name: "Nguyen Viet Trong",
    bod: "26/08/96",
    email: "abc@email.com",
    phone: "0983144444",
    registerAt: "22/12/2018"
  };
  constructor() {}

  ngOnInit() {}
}
