import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService } from "../../../services/data.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  adminLoginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.adminLoginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }
  onSubmit() {
    if (this.adminLoginForm.valid) {
      // console.log("form value", this.adminLoginForm.value);
      this.dataService
        .postAdminLogin({
          email: this.adminLoginForm.value.email,
          password: this.adminLoginForm.value.password
        })
        .subscribe({
          next(response) {
            localStorage.setItem("token", response.token);
          },
          error(error) {
            console.log("error", error);
          }
        });
    }
  }
  ngOnInit() {}
}
