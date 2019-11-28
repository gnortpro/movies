import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent implements OnInit {
  constructor() {}
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required]);

  getEmailErrorMessage() {
    return this.email.hasError("required")
      ? "Trường này bắt buộc"
      : this.email.hasError("email")
      ? "Không đúng định dạng email"
      : "";
  }

  getPasswordErrorMessage() {
    return this.password.hasError("required") ? "Trường này bắt buộc" : "";
  }

  submitForm(form): void {
    console.log(form);
  }
  ngOnInit() {}
}
